import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Reminder } from 'src/app/interfaces/Models/Reminder';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  let store : Store<{ selectedYearAndMonth: ISelectedYearAndMonth,  reminders: Reminder[] }>

  let storeStub = {
    dispatch: () => { },
    select: () => of({})
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarComponent ],
      providers:[
        FormBuilder,
        {provide: Store, useValue: storeStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = fixture.debugElement.injector.get(Store);
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('should create and set selected year and month', () => { 
    store.select = () => of({   
        year:2020,
        month: 10,   
      
    })
    expect(component.selectedYearAndMonth).toEqual({year:2020, month:9})
  });

  it('should create calendar with 35 days', () => { 
    component.selectedYearAndMonth = {
      year:2020,
      month:10
    }
    component.createCalendar();
    expect(component.days.length).toEqual(35)
  });

  it('should set selectedYearAndMonth when defineDate is called', () => { 
    component.datePicker.controls.year.setValue(2021)
    component.datePicker.controls.month.setValue(8)
    component.defineDate();
    expect(component.selectedYearAndMonth).toEqual({year: 2021, month:8})
  });

  it('should get reminders that matches de date', () => { 
    component.getRemindersFromDate(new Date())
    let reminder = new Reminder();
    reminder.date = '2020-10-03'
    component.allReminders = [reminder]
    expect(component.allReminders.length).toEqual(1)
  });

  it('should return black', () => { 
    let value = component.getTextColorForBackgroundColor("#ffffff")
    expect(value).toEqual('black')
  });

  it('should return white', () => { 
    let value = component.getTextColorForBackgroundColor("#000000")
    expect(value).toEqual('white')
  });

  it('should create calendar from january white and have 35 days', () => {
    component.selectedYearAndMonth = {
      year:2020,
      month:0
    } 
    component.createCalendar();
    expect(component.days.length).toEqual(35)
  });

  it('should create calendar from december white and have 35 days', () => {
    component.selectedYearAndMonth = {
      year:2020,
      month:11
    } 
    component.createCalendar();
    expect(component.days.length).toEqual(35)
  });

 

});
