import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditReminderComponent } from './new-edit-reminder.component';

describe('NewEditReminderComponent', () => {
  let component: NewEditReminderComponent;
  let fixture: ComponentFixture<NewEditReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEditReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
