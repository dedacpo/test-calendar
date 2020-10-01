import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';
import { selectedYearAndMonth } from 'src/app/shared/store/store.actions';

@Component({
  selector: 'app-new-edit-reminder',
  templateUrl: './new-edit-reminder.component.html',
  styleUrls: ['./new-edit-reminder.component.scss']
})
export class NewEditReminderComponent implements OnInit {

  constructor(private store: Store<{selectedYearAndMonth: ISelectedYearAndMonth}>) { }

  ngOnInit() {
    this.store.dispatch(selectedYearAndMonth({selectedYearAndMonth:{
      year:'2020',
      month: '10'
    }}))
  }

}
