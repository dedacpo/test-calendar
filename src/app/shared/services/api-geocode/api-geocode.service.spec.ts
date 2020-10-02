import { HttpClient } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HelperService } from '../helper/helper.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { ApiGeocodeService } from './api-geocode.service';

describe('ApiGeocodingService', () => {
  let service: ApiGeocodeService;
  let httpTestingController: HttpTestingController;

  const KEY = '03a36efc57c9401cb16cd4e23b0527c4';
  const URL_API = 'https://api.opencagedata.com/geocode/v1/json';


  let mapHelperStub:{
    mapGeocodeData: ()=>{},
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiGeocodeService, HttpClient, {provide: HelperService,useValue:mapHelperStub}]
    });
    service = TestBed.inject(ApiGeocodeService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all cities that matches cityName', fakeAsync(() => {
    const cityName = 'Americana';
    const url = `${URL_API}?q=${cityName}&key=${KEY}`;
    service.getCity(cityName).subscribe(() => { });
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('GET');
    tick();

  }));
});
