import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';
import { WEEK_DAYS_DICT } from 'src/app/shared/dictionaries/weekDays';
import { MONTHS_ENUM } from 'src/app/shared/enums/months.enum';
import { WEEK_DAYS_ENUM } from 'src/app/shared/enums/weekDays.enum';
import { HelperService } from 'src/app/shared/services/helper/helper.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private store: Store<{selectedYearAndMonth: ISelectedYearAndMonth}>, public helper: HelperService) { }

  selectedYearAndMonth:ISelectedYearAndMonth

  days = []

  weekDaysArray = Array(7)

  weekDaysDict = WEEK_DAYS_DICT

  ngOnInit(): void {
    console.log(this.weekDaysDict[0])
    this.store.select('selectedYearAndMonth').subscribe((result:ISelectedYearAndMonth) => {
      console.log('selectedYearAndMonth',result );
    })

    this.createCalendar(2020,0);

  }

  createCalendar(year:number, month:number){
    const firstDay = (new Date(year,month)).getDay();   
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    const lastDay = (new Date(year,month, daysInMonth)).getDay(); 

    //adding the days from previous month when the selected month doesn't starts at the first day of week (sunday)
    if(firstDay > WEEK_DAYS_ENUM.Sunday){
      const lastDayPreviousMonth = 32 - new Date(month-1 < MONTHS_ENUM.January ? year-1 : year, month-1 < MONTHS_ENUM.January ? MONTHS_ENUM.December : month-1, 32).getDate()
      for(let i = firstDay-1 ; i >= 0 ; i--){
        const date = new Date(month-1 < MONTHS_ENUM.January ? year-1 : year, month-1 < MONTHS_ENUM.January ? MONTHS_ENUM.December : month-1, lastDayPreviousMonth - i);
        this.days.push({
          value: lastDayPreviousMonth - i,
          completeDate: date,
          highlighted:false,
          weekDay: WEEK_DAYS_DICT[date.getDay()],
          reminders: this.helper.getRemindersFromDate(date)
        })
      }     
    }

    //adding the days from select month
    for(let i = 0 ; i < daysInMonth ; i++){
      const date = new Date(year, month, i+1);
      this.days.push({
        value: i+1,
        completeDate: date,
        highlighted:true,
        weekDay: WEEK_DAYS_DICT[date.getDay()],
        reminders: this.helper.getRemindersFromDate(date)
      })
    }

    //adding the days from next month when the selected month doesn't ends at the last day of week (saturday)      
    if(lastDay <  WEEK_DAYS_ENUM.Saturday){
      const fistDayNextMonth =  WEEK_DAYS_ENUM.Saturday - lastDay;
      for(let i = 0 ; i < fistDayNextMonth ; i++){
        const date = new Date(month+1 > MONTHS_ENUM.December ? year+1 : year, month+1 > MONTHS_ENUM.December ? MONTHS_ENUM.January : month+1,  i+1)
        this.days.push({
          value: i+1,
          completeDate: date,
          highlighted:false,
          weekDay: WEEK_DAYS_DICT[date.getDay()],
          reminders: this.helper.getRemindersFromDate(date)
        })
      }  
    }

    console.log("days", this.days)
  }

}
