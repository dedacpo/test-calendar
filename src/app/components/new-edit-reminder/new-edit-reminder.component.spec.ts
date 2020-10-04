import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { City } from 'src/app/interfaces/Models/City.model';
import { Reminder } from 'src/app/interfaces/Models/Reminder';
import { Weather } from 'src/app/interfaces/Models/Weather.model';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';
import { ApiGeocodeService } from 'src/app/shared/services/api-geocode/api-geocode.service';
import { ApiWeatherService } from 'src/app/shared/services/api-weather/api-weather.service';

import { NewEditReminderComponent } from './new-edit-reminder.component';

describe('NewEditReminderComponent', () => {
  let component: NewEditReminderComponent;
  let fixture: ComponentFixture<NewEditReminderComponent>;
  let store: Store<{ selectedYearAndMonth: ISelectedYearAndMonth, reminders: Reminder[] }>
  let apiGeocodeService: ApiGeocodeService;
  let activatedRouteStub = {
    snapshot: {
      params: {
        date: '2020-10-03',
        id: 1
      },
    }
  }

  let storeStub = {
    dispatch: () => { },
    select: () => of({})
  }
  let apiGeocodeStub = {
    getCity: () => of({})
  }

  let apiWeatherStub = {
    getWeatherFromLatLon: () => of({})
  }

  let routerStub = {
    navigate: jasmine.createSpy('navigate'),
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewEditReminderComponent],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Store, useValue: storeStub },
        { provide: ApiGeocodeService, useValue: apiGeocodeStub },
        { provide: ApiWeatherService, useValue: apiWeatherStub },
        { provide: Router, useValue: routerStub },

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = fixture.debugElement.injector.get(Store);
    apiGeocodeService = fixture.debugElement.injector.get(ApiGeocodeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home', () => {
    store.select = () => of([
      {
        id: 0,
        date: '2020-10-03'
      }
    ])
    expect(routerStub.navigate).toHaveBeenCalled();
  })

  it('should not call apiGeocode service', () => {
    component.reminder.controls.city.setValue('');
    component.searchCity();
    const apiGeocodeService = TestBed.inject(ApiGeocodeService);
    const spy = spyOn(apiGeocodeService, 'getCity')
    expect(spy).not.toHaveBeenCalled();
  })

  it('should set cities', () => {
    component.reminder.controls.city.setValue('americana');
    let data = [
      { formatted: "americana, região de campinas", lat: 40, long: 40 }
    ]
    spyOn(apiGeocodeService, 'getCity').and.returnValue(of(data));
    component.searchCity();
    expect(component.cities).toEqual(data);
  })

  it('should not displayWeather when form control city select is invalid', () => {
    component.reminder.controls.citySelect.setErrors(require);
    component.editReminder = undefined;
    component.searchWeather();
    expect(component.displayWeather).toEqual(false);
  });

  it('should invalidate the form if title is more than 30 characters', () => {
    component.reminder.controls.title.setValue("this phrase is much more longer than the 30 characters allowed, so the form should be invalid");
    expect(component.reminder.valid).toEqual(false);
  })
  it('should invalidate the form if title is blank', () => {
    component.reminder.controls.title.setValue("");
    expect(component.reminder.valid).toEqual(false);
  })
  it('should invalidate the form if city is blank', () => {
    component.reminder.controls.city.setValue("");
    expect(component.reminder.valid).toEqual(false);
  })
  it('should invalidate the form if start time is blank', () => {
    component.reminder.controls.startTime.setValue("");
    expect(component.reminder.valid).toEqual(false);
  })
  it('should invalidate the form if end time is blank', () => {
    component.reminder.controls.endTime.setValue("");
    expect(component.reminder.valid).toEqual(false);
  })


  it('should set displaWeather to true when search weather is caled and edit reminder exists', () => {
    component.displayWeather = false;
    let value = { lat: 40, long: 40, formatted: "americana" } as City
    component.reminder.controls.citySelect.setValue('0');
    component.cities = [
      value
    ]
    component.editReminder = { cityLat: 40, cityLong: 40 } as Reminder
    component.searchWeather();
    fixture.detectChanges()
    expect(component.displayWeather).toEqual(true);
  })

  it('should set city', () => {
    component.displayWeather = true;
    let value = { lat: 40, long: 40, formatted: "americana" } as City
    component.reminder.controls.citySelect.setValue('0');
    component.cities = [
      value
    ]
    component.editReminder = undefined
    component.searchWeather();
    fixture.detectChanges()
    expect(component.reminder.getRawValue().city).toEqual('americana');
  })

  it('should save and navigate to home', () => {
    component.reminder.controls.citySelect.setValue(0);
    let value = { lat: 40, long: 40, formatted: "americana" } as City;
    component.cities = [
      value
    ]
    component.weather = [{
      date: '2020-10-03',
      weatherId: 800,
      weatherMain: "Rain",
      weatherDescription: 'Strong rain',
      weatherIcon: '11d'
    }];
    component.reminders = [
      {
        id: 1,
        cityLat: 40,
        cityLong: 40,
        title: 'teste',
        city: 'americana',
        startTime: "15:00",
        endTime: "20:00",
        date: "2020-01-01",
        reminderColor: "#0000",
        weather: new Weather()
      }
    ]
    fixture.detectChanges()
    component.saveReminder();
    expect(routerStub.navigate).toHaveBeenCalledWith(['/reminders']);
  })


  it('should save and navigate to home 2', () => {
    component.reminder.controls.citySelect.setValue(0);
    let value = { lat: 40, long: 40, formatted: "americana" } as City;
    component.cities = [
      value
    ]
    component.weather = [{
      date: '2020-10-03',
      weatherId: 800,
      weatherMain: "Rain",
      weatherDescription: 'Strong rain',
      weatherIcon: '11d'
    }];
    component.reminders = [
      {
        id: 0,
        cityLat: 40,
        cityLong: 40,
        title: 'teste',
        city: 'americana',
        startTime: "15:00",
        endTime: "20:00",
        date: "2020-01-01",
        reminderColor: "#0000",
        weather: new Weather()
      }
    ]
    component.editReminder = { id: 0 } as Reminder
    fixture.detectChanges()
    component.saveReminder();
    expect(routerStub.navigate).toHaveBeenCalledWith(['/reminders']);
  })

  it('should patch value when changeComplete be called', () => {
    component.changeComplete({ color: { hex: "#ffffff" } })
    expect(component.reminder.getRawValue().reminderColor).toEqual("#ffffff")
  })

  it('create form with editReminder', () => {
    const spy = spyOn(component, 'searchCity');
    component.editReminder = {
      title: 'teste',
      city: 'americana',
      startTime: '20:00',
      endTime: '22:00',
      reminderColor: "#ffffff"
    } as Reminder
    fixture.detectChanges()
    component.createForm();
    expect(spy).toHaveBeenCalled();
  })

  it('create form with selected date', () => {
    const spy = spyOn(component, 'searchCity');
    component.selectedDate = undefined;
    component.editReminder = {
      title: 'teste',
      city: 'americana',
      startTime: '20:00',
      endTime: '22:00',
      reminderColor: "#ffffff"
    } as Reminder
    fixture.detectChanges()
    component.createForm();
    expect(spy).toHaveBeenCalled();
  })


});
