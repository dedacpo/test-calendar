import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelperService } from '../helper/helper.service';


@Injectable({
  providedIn: 'root'
})
export class ApiGeocodeService {

  private KEY = '03a36efc57c9401cb16cd4e23b0527c4';
  private URL_API = 'https://api.opencagedata.com/geocode/v1/json';

  constructor(private http: HttpClient, private helper: HelperService) { }

  getCity(cityName: string): Observable<any> {
    return this.http.get<any>(`${this.URL_API}`, { params: { q: cityName, key: this.KEY } })
      .pipe(
        map(response => {
          return this.helper.mapGeocodeData(response);
        })
      )
  }

}
