import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { City } from 'src/app/interfaces/Models/City.model';
import { Reminder } from 'src/app/interfaces/Models/Reminder';
import { Weather } from 'src/app/interfaces/Models/Weather.model';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';
import { ApiGeocodeService } from 'src/app/shared/services/api-geocode/api-geocode.service';
import { ApiWeatherService } from 'src/app/shared/services/api-weather/api-weather.service';
import { HelperService } from 'src/app/shared/services/helper/helper.service';
import { reminders } from 'src/app/shared/store/store.actions';
import * as _ from 'underscore';

@Component({
  selector: 'app-new-edit-reminder',
  templateUrl: './new-edit-reminder.component.html',
  styleUrls: ['./new-edit-reminder.component.scss']
})
export class NewEditReminderComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public route: ActivatedRoute,
    private store: Store<{ selectedYearAndMonth: ISelectedYearAndMonth, reminders: Reminder[] }>,
    private apiGeocodeService: ApiGeocodeService,
    private apiWeather: ApiWeatherService,
    private router: Router,
    private helper: HelperService
  ) { }


  selectedDate: Date

  reminder: FormGroup

  cities: City[]

  weathers: Weather[]

  weather: Weather[]

  displayWeather: Boolean = false;

  reminders: Reminder[]

  storeSubscription

  editReminder: Reminder

  changed:boolean = false

  ngOnInit() {

    this.selectedDate = new Date(this.route.snapshot.params.date + 'T00:00:00');
    
    this.storeSubscription = this.store.select('reminders').subscribe((result: Reminder[]) => {
      this.reminders = result;
      if (this.route.snapshot.params.id) {
        this.editReminder = _.findWhere(this.reminders, {id: Number(this.route.snapshot.params.id)})  
        if (this.editReminder == undefined){
          this.router.navigate(['/']);
          return;
        }
         
        this.selectedDate = new Date(this.editReminder.date + 'T00:00:00');       
      }
    })

    this.createForm();

    if(this.editReminder){
      this.searchWeather();
      this.reminder.markAllAsTouched();      
    }
      

    this.storeSubscription.unsubscribe();

  }

  createForm() {
    this.reminder = this.formBuilder.group({
      date: [this.selectedDate ? this.selectedDate : '', [Validators.required]],
      title: [this.editReminder ? this.editReminder.title : '', [Validators.required]],
      city: [this.editReminder ? this.editReminder.city : '', [Validators.required]],
      citySelect: [''],
      startTime: [this.editReminder ? this.editReminder.startTime : ''],
      endTime: [this.editReminder ? this.editReminder.endTime : ''],
      reminderColor: [this.editReminder ? this.editReminder.reminderColor : '#ffffff', [Validators.required]],
    });
    if (this.editReminder) {
      this.searchCity();
    }
  }

  searchCity() {    
    if (this.reminder.controls['city'].status == 'INVALID')
      return;
    this.apiGeocodeService.getCity(this.reminder.getRawValue().city).subscribe(apiResponse => {
      this.cities = apiResponse;
    });
  }

  searchWeather() {
    if (this.reminder.controls['citySelect'].status == 'INVALID' && this.editReminder == undefined)
      return;

    this.weathers = [];
    this.weather = [];
    let citySelected;
    if(this.editReminder){
      citySelected = {
        lat: this.editReminder.cityLat,
        long: this.editReminder.cityLong
      }
    }      
    else{   
      citySelected = this.cities[this.reminder.getRawValue().citySelect]
      this.reminder.patchValue({ city: citySelected.formatted })
    }
    this.displayWeather = false;
  
    this.apiWeather.getWeatherFromLatLon(citySelected.lat.toString(), citySelected.long.toString()).subscribe(apiResponse => {
      this.weathers = apiResponse;
      if (this.reminder.controls['date'].status == 'VALID')
        this.findWeatherfromDate()
    });
  }

  findWeatherfromDate() {
    const splitedDate = this.helper.formatDateToyyyyMMdd(this.reminder.getRawValue().date);
    this.weather = _.where(this.weathers,{date: splitedDate})
    this.displayWeather = true;
  }

  saveReminder() {
    var reminder: Reminder;
    var newArray = []
    this.reminders.map(item => {
      newArray.push(item)
    })
    this.reminders = newArray;
    reminder = this.reminder.getRawValue();
    reminder.id = this.editReminder ? this.editReminder.id : Date.now();
    reminder.date = this.helper.formatDateToyyyyMMdd(this.reminder.getRawValue().date);
    reminder.cityLat = this.editReminder ? this.editReminder.cityLat : this.cities[this.reminder.getRawValue().citySelect].lat;
    reminder.cityLong = this.editReminder ? this.editReminder.cityLong : this.cities[this.reminder.getRawValue().citySelect].long;
    reminder.weather = this.weather[0];
    if(this.editReminder){
      let index = _.findIndex(this.reminders, {id: this.editReminder.id})
      if(index > -1){
        this.reminders[index] = reminder;
      }
    }else{
      newArray.push(reminder)
    }     
    this.store.dispatch(reminders({ reminders: this.reminders }));
    this.router.navigate(['/reminders'])
  }

  changeComplete(value){
    this.reminder.patchValue({ reminderColor: value.color.hex })
  }


}
