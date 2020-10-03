import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Reminder } from './interfaces/Models/Reminder';
import { Weather } from './interfaces/Models/Weather.model';
import { reminders } from 'src/app/shared/store/store.actions';
import { HelperService } from './shared/services/helper/helper.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Lazy loading feature modules';
  
  reminders = [];

  constructor(
    private store: Store<{ reminders: Reminder[] }>,
    private helper: HelperService
  ){}

  ngOnInit(){
    let reminder;
    reminder = new Reminder();
    reminder.id=1601697085540;
    reminder.title = "Reminder teste" ;
    reminder.city = "Americana, Região Metropolitana de Campinas, Brasil";
    reminder.date = this.helper.formatDateToyyyyMMdd(new Date());
    reminder.startTime = "20:00";
    reminder.endTime = "22:00";
    reminder.weather = new Weather()
    reminder.weather.date = new Date();
    reminder.reminderColor = "#29f1c3";
    reminder.weather.weatherDescription = "light rain";
    reminder.weather.weatherIcon = "10d"
    reminder.weather.weatherId = 500;
    reminder.weather.weatherMain = "Rain"

    this.reminders.push(reminder)
    this.store.dispatch(reminders({ reminders: this.reminders}));
  }

}
