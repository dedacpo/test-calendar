import { Injectable } from '@angular/core';
import { City } from 'src/app/interfaces/Models/City.model';
import { Weather } from 'src/app/interfaces/Models/Weather.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  mapGeocodeData(data) {
    return data.results.map(cityItem => {
      let city = new City();
      city.formatted = cityItem.formatted;
      city.lat = cityItem.geometry.lat;
      city.long = cityItem.geometry.lng;

      return city;
    })
  }

  mapWeatherData(data) {
    return data.daily.map(weatherItem => {
      let weather = new Weather();
      weather.date = this.formatDateToyyyyMMdd(new Date(weatherItem.dt * 1000));
      weather.weatherId = weatherItem.weather[0].id;
      weather.weatherMain = weatherItem.weather[0].main;
      weather.weatherDescription = weatherItem.weather[0].description;
      weather.weatherIcon = weatherItem.weather[0].icon;

      return weather;
    })
  }

  getRemindersFromDate(date: Date) {

  }

  formatDateToyyyyMMdd(date: Date) {
    var date = new Date(date);
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
      .toISOString()
      .split("T")[0];
  }

}
