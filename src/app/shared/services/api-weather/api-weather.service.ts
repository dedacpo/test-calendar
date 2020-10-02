import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelperService } from '../helper/helper.service';


@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {

  private KEY = 'f008710034ef815c313622f16e4d9e2c';
  private URL_API = 'https://api.openweathermap.org/data/2.5/onecall';

  constructor(private http: HttpClient, private helper: HelperService) { }

  getWeatherFromLatLon(lat: string, lon: string): Observable<any> {
    return this.http.get<any>(`${this.URL_API}`, { params: { lat: lat, lon: lon, appid: this.KEY } })
      .pipe(
        map(response => {
          return this.helper.mapWeatherData(response);
        })
      )
  }
}
