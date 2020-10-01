import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private store: Store<{selectedYearAndMonth: ISelectedYearAndMonth}>) { }

  selectedYearAndMonth:ISelectedYearAndMonth

  ngOnInit(): void {
    this.store.select('selectedYearAndMonth').subscribe((result:ISelectedYearAndMonth) => {
      console.log('selectedYearAndMonth',result );
    })

  }

}
