import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';
import { ApiGeocodeService } from 'src/app/shared/services/api-geocode/api-geocode.service';
import { ApiWeatherService } from 'src/app/shared/services/api-weather/api-weather.service';
import { selectedYearAndMonth } from 'src/app/shared/store/store.actions';

@Component({
  selector: 'app-new-edit-reminder',
  templateUrl: './new-edit-reminder.component.html',
  styleUrls: ['./new-edit-reminder.component.scss']
})
export class NewEditReminderComponent implements OnInit {

  constructor(private store: Store<{selectedYearAndMonth: ISelectedYearAndMonth}>, private apiGeocodeService: ApiGeocodeService, private apiWeather: ApiWeatherService) { }

  ngOnInit() {
    this.store.dispatch(selectedYearAndMonth({selectedYearAndMonth:{
      year:'2020',
      month: '10'
    }}))

    this.apiGeocodeService.getCity('americana').subscribe( apiResponse => {
      console.log("api geocoding response", apiResponse)
    });

    this.apiWeather.getWeatherFromLatLon("-22.7392463", "-47.3306032").subscribe( apiResponse => {
      console.log("api weather response", apiResponse)
    });

  }

}
