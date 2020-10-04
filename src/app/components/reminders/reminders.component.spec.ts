import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Reminder } from 'src/app/interfaces/Models/Reminder';
import { Weather } from 'src/app/interfaces/Models/Weather.model';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { ApiWeatherService } from 'src/app/shared/services/api-weather/api-weather.service';

import { RemindersComponent } from './reminders.component';

describe('RemindersComponent', () => {
  let component: RemindersComponent;
  let fixture: ComponentFixture<RemindersComponent>;
  let store: Store<{ selectedYearAndMonth: ISelectedYearAndMonth, reminders: Reminder[] }>
  let apiWeatherService: ApiWeatherService;

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

  let apiWeatherStub = {
    getWeatherFromLatLon: () => of([{date:'2020-10-11', weather:new Weather()}])
  }

  let matDialogStub = {
    open: ()=>{}
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindersComponent ],
      providers:[        
        { provide: MatDialog, useValue: matDialogStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Store, useValue: storeStub },
        { provide: ApiWeatherService, useValue: apiWeatherStub },

        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = fixture.debugElement.injector.get(Store);
    apiWeatherService = fixture.debugElement.injector.get(ApiWeatherService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get weather for reminder', () => {  
    let newReminder = new Reminder();
    component.reminders = [
      newReminder
    ] 
    let reminder = {
      cityLat:40, 
      cityLong:40,
      date:'2020-10-11'

    }
    component.getWeather(reminder, 0);
    fixture.detectChanges();
    expect(component.reminders[0].weather).toEqual({date:'2020-10-11',weather:new Weather()}as any);
  });

  it('should perform the deletion',()=>{
    let reminder = {
      id:0
    }
    let newReminder = new Reminder()
    newReminder.id = 0;
    component.allReminders = [newReminder]
    component.getPerformResult(reminder,0,true);
    expect(component.allReminders.length).toEqual(0)
  })

  it('should not perform the deletion',()=>{
    let reminder = {
      id:0
    }
    let newReminder = new Reminder()
    newReminder.id = 0;
    component.allReminders = [newReminder]
    component.getPerformResult(reminder,0,false);
    expect(component.allReminders.length).toEqual(1)
  })

  
});
