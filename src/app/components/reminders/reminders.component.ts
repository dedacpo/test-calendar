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
        month: Number(this.selectedDate.month)-1
      }
    }))  


    this.storeSubscription = this.store.select('reminders').subscribe((result: Reminder[]) => {      
      this.allReminders = JSON.parse(JSON.stringify(result));
      this.reminders = this.allReminders.filter(item => item.date == this.route.snapshot.params.date)
    })
    this.storeSubscription.unsubscribe();
   

  }

  
  getWeather(reminder,i) {  
    let interval  = setInterval(()=>{
      if(this.storeSubscription){
        this.apiWeather.getWeatherFromLatLon(reminder.cityLat.toString(), reminder.cityLong.toString()).subscribe(apiResponse => {
          this.reminders[i].weather = apiResponse.filter(item => item.date == reminder.date)[0];
        });
    
        clearInterval(interval)
      }
    },100) 
    
  }

  deleteReminder(reminder,i){
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: 'Delete reminder', content: `Are you sure you want to delete the reminder <b>"${reminder.title}"</b>?` }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let position = _.findIndex(this.allReminders, {id: reminder.id})
        this.allReminders.splice(position, 1);
        this.reminders.splice(i,1)
        this.store.dispatch(reminders({ reminders: this.allReminders }));
      }        

    });
  }

  get monthAsNumber(){
    return Number(this.selectedDate.month) -1
  }

}
