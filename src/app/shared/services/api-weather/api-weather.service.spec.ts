import { HttpClient } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HelperService } from '../helper/helper.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ApiWeatherService } from './api-weather.service';

describe('ApiWeatherService', () => {
  let service: ApiWeatherService;
  let httpTestingController: HttpTestingController;

  const KEY = 'f008710034ef815c313622f16e4d9e2c';
  const URL_API = 'https://api.openweathermap.org/data/2.5/onecall';


  let mapHelperStub:{
    mapWeatherData: ()=>{},
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiWeatherService, HttpClient, {provide: HelperService,useValue:mapHelperStub}]
    });
    service = TestBed.inject(ApiWeatherService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all weather froma given lat and long', fakeAsync(() => {
    const lat =  -22.7392463;
    const lon =  -47.3306032;
    const url = `${URL_API}?lat=${lat}&lon=${lon}&appid=${KEY}`;
    service.getWeatherFromLatLon(lat.toString(), lon.toString()).subscribe(() => { });
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('GET');
    tick();

  }));
});
