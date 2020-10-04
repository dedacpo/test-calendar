import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Reminder } from 'src/app/interfaces/Models/Reminder';
import { Weather } from 'src/app/interfaces/Models/Weather.model';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MONTHS_DICT } from 'src/app/shared/dictionaries/months';
import { WEEK_DAYS_DICT } from 'src/app/shared/dictionaries/weekDays';
import { ApiWeatherService } from 'src/app/shared/services/api-weather/api-weather.service';
import { HelperService } from 'src/app/shared/services/helper/helper.service';
import { selectedYearAndMonth, reminders } from 'src/app/shared/store/store.actions';
import * as _ from 'underscore';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  constructor(
    public helper: HelperService,
    public route: ActivatedRoute,
    private store: Store<{ selectedYearAndMonth: ISelectedYearAndMonth, reminders: Reminder[] }>,
    private apiWeather: ApiWeatherService,
    public dialog: MatDialog,
  ) { }

  reminders: Reminder[] = []

  selectedDate

  weekDaysDict = WEEK_DAYS_DICT

  monthsDict = MONTHS_DICT

  allReminders: Reminder[]

  storeSubscription


  ngOnInit(): void {
    let splitedDate = this.route.snapshot.params.date.split('-')
    this.selectedDate = {
      year: splitedDate[0],
      month: splitedDate[1],
      day: splitedDate[2],
      weekDay: new Date(this.route.snapshot.params.date + 'T00:00:00').getDay()
    }

    this.store.dispatch(selectedYearAndMonth({
      selectedYearAndMonth: {
        year: this.selectedDate.year,
        month: Number(this.selectedDate.month) - 1
      }
    }))


    this.storeSubscription = this.store.select('reminders').subscribe((result: Reminder[]) => {
      this.allReminders = JSON.parse(JSON.stringify(result));
      this.reminders = _.where(this.allReminders, { date: this.route.snapshot.params.date })
    })
    this.storeSubscription.unsubscribe();


  }


  getWeather(reminder, i) {
    this.apiWeather.getWeatherFromLatLon(reminder.cityLat.toString(), reminder.cityLong.toString()).subscribe(apiResponse => {
      this.reminders[i].weather = _.findWhere(apiResponse, { date: reminder.date });
    });
  }

  deleteReminder(reminder, i) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: 'Delete reminder', content: `Are you sure you want to delete the reminder <b>"${reminder.title}"</b>?` }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPerformResult(reminder, i, result);

    });
  }

  deleteAllReminders() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: 'Delete all reminders', content: `Are you sure you want to delete ALL the reminders for this date?` }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getPerformResultDeleteAll(result);
    });
  }

  getPerformResult(reminder, i, result) {
    if (result) {
      let allRemindersCopy = JSON.parse(JSON.stringify(this.allReminders));
      let remindersCopy = JSON.parse(JSON.stringify(this.reminders));
      let position = _.findIndex(allRemindersCopy, { id: reminder.id })
      allRemindersCopy.splice(position, 1);
      remindersCopy.splice(i, 1);
      this.reminders = remindersCopy;
      this.allReminders = allRemindersCopy;
      this.store.dispatch(reminders({ reminders: allRemindersCopy }));
    }
  }

  getPerformResultDeleteAll(result) {
    if (result) {
      let newAllReminders = []
      this.allReminders.forEach((value, i) => {
        if (_.find(this.reminders, { id: value.id }) == undefined)
          newAllReminders.push(value);
      })
      this.reminders = []
      this.store.dispatch(reminders({ reminders: newAllReminders }));
    }
  }

  get monthAsNumber() {
    return Number(this.selectedDate.month) - 1
  }

}
