import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Reminder } from 'src/app/interfaces/Models/Reminder';
import { Weather } from 'src/app/interfaces/Models/Weather.model';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';
import { MONTHS_DICT } from 'src/app/shared/dictionaries/months';
import { WEEK_DAYS_DICT } from 'src/app/shared/dictionaries/weekDays';
import { ApiWeatherService } from 'src/app/shared/services/api-weather/api-weather.service';
import { HelperService } from 'src/app/shared/services/helper/helper.service';
import { selectedYearAndMonth } from 'src/app/shared/store/store.actions';

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
    private apiWeather: ApiWeatherService
  ) { }

  reminders: Reminder[] = []

  selectedDate: Date

  weekDaysDict = WEEK_DAYS_DICT

  monthsDict = MONTHS_DICT

  allReminders: Reminder[]

  storeSubscription

  ngOnInit(): void {
    this.selectedDate = new Date(this.route.snapshot.params.date + 'T00:00:00');

    this.store.dispatch(selectedYearAndMonth({
      selectedYearAndMonth: {
        year: this.selectedDate.getFullYear(),
        month: this.selectedDate.getMonth()
      }
    }))  


    this.storeSubscription = this.store.select('reminders').subscribe((result: Reminder[]) => {
      this.allReminders = result;
      this.reminders = this.allReminders.filter(item => Number(item.date.split('-')[0]) == this.selectedDate.getFullYear() && Number(item.date.split('-')[1]) - 1 == this.selectedDate.getMonth() && Number(item.date.split('-')[2]) == this.selectedDate.getDate())
    })

    this.storeSubscription.unsubscribe();

  }

  
  getWeather(reminder) {
    if (reminder.weather)
      return;
    this.apiWeather.getWeatherFromLatLon(reminder.cityLat.toString(), reminder.cityLong.toString()).subscribe(apiResponse => {
      reminder.weather = apiResponse;
    });

  }

}
