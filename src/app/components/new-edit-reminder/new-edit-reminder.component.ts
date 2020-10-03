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
import { reminders } from 'src/app/shared/store/store.actions';

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
    private router: Router
  ) { }


  selectedDate: string

  reminder: FormGroup

  cities: City[]

  weathers: Weather[]

  weather: Weather[]

  displayWeather: Boolean = false;

  reminders: Reminder[]

  storeSubscription

  editReminder: Reminder

  ngOnInit() {

    if (this.route.snapshot.params.date) {
      this.selectedDate = this.route.snapshot.params.date;
    }
    this.storeSubscription = this.store.select('reminders').subscribe((result: Reminder[]) => {
      this.reminders = result;
      if (this.route.snapshot.params.id) {
        this.editReminder = this.reminders.filter(item => item.id == Number(this.route.snapshot.params.id))[0]
        this.selectedDate = this.editReminder.date;
        this.weather = [this.editReminder.weather];
        if (this.editReminder == undefined)
          this.router.navigate['/'];
      }
    })

    this.createForm();

    this.storeSubscription.unsubscribe();

  }

  createForm() {
    this.reminder = this.formBuilder.group({
      date: [this.selectedDate ? this.selectedDate : '', [Validators.required]],
      title: [this.editReminder ? this.editReminder.title : '', [Validators.required]],
      city: [this.editReminder ? this.editReminder.city : '', [Validators.required]],
      citySelect: ['', [Validators.required]],
      startTime: [this.editReminder ? this.editReminder.startTime : '', [Validators.required]],
      endTime: [this.editReminder ? this.editReminder.endTime : '', [Validators.required]],
      reminderColor: [this.editReminder ? this.editReminder.reminderColor : '', [Validators.required]],
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
    if (this.reminder.controls['citySelect'].status == 'INVALID')
      return;

    this.weathers = [];
    this.weather = [];
    this.displayWeather = false;
    const citySelected = this.cities[this.reminder.getRawValue().citySelect]
    this.reminder.patchValue({ city: citySelected.formatted })
    this.apiWeather.getWeatherFromLatLon(citySelected.lat.toString(), citySelected.long.toString()).subscribe(apiResponse => {
      this.weathers = apiResponse;
      if (this.reminder.controls['date'].status == 'VALID')
        this.findWeatherfromDate()
    });
  }

  findWeatherfromDate() {
    const splitedDate = this.reminder.getRawValue().date.split('-');
    const year = Number(splitedDate[0]);
    const month = Number(splitedDate[1]) - 1;
    const day = Number(splitedDate[2]);
    if (this.weather)
      this.weather = this.weathers.filter(item => item.date.getFullYear() == year && item.date.getMonth() == month && item.date.getDate() == day)
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
    reminder.id = Date.now();
    reminder.cityLat = this.cities[this.reminder.getRawValue().citySelect].lat;
    reminder.cityLong = this.cities[this.reminder.getRawValue().citySelect].long;
    reminder.weather = this.weather[0];
    newArray.push(reminder)
    this.store.dispatch(reminders({ reminders: this.reminders }));
  }


}
