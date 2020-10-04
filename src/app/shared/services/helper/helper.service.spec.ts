import { TestBed } from '@angular/core/testing';
import { City } from 'src/app/interfaces/Models/City.model';
import { Weather } from 'src/app/interfaces/Models/Weather.model';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should successfully convert object to City model', () => {
    let response =
    {
      results: [
        {
          formatted: "Americana, Região Metropolitana de Campinas, Brasil",
          geometry: {
            lat: -22.7392463,
            lng: -47.3306032
          }
        }
      ]
    };
    let result = service.mapGeocodeData(response);
    let expectVar = new City();
    expectVar.formatted = response.results[0].formatted;
    expectVar.lat = response.results[0].geometry.lat;
    expectVar.long = response.results[0].geometry.lng;
    expect(result).toEqual([expectVar]);
  });

  it('should successfully convert object to Weather model', () => {
    let response =
    {
      daily: [
        {
          dt: 1601560800,
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d"
            }
          ]
        }
      ]
    };
    let result = service.mapWeatherData(response);
    let expectVar = new Weather();
    expectVar.date = "2020-10-01";
    expectVar.weatherId = response.daily[0].weather[0].id;
    expectVar.weatherMain = response.daily[0].weather[0].main;
    expectVar.weatherDescription = response.daily[0].weather[0].description;
    expectVar.weatherIcon = response.daily[0].weather[0].icon;
    expect(result).toEqual([expectVar]);
  });
});
