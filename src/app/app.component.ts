import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Reminder } from './interfaces/Models/Reminder';
import { Weather } from './interfaces/Models/Weather.model';
import { reminders } from 'src/app/shared/store/store.actions';
import { HelperService } from './shared/services/helper/helper.service';
import { HTTPStatus } from './shared/services/httpInterceptor/http.interceptor';
import { remindersMock } from './shared/const.ts/reminders.mock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked{
  title = 'Calendar Reminder';
  
  reminders = [];

  clientHeight: number;

  HTTPActivity: boolean;

  constructor(
    private store: Store<{ reminders: Reminder[] }>,
    private httpStatus: HTTPStatus, 
    private cdr: ChangeDetectorRef,
  ){
    this.clientHeight = window.innerHeight;
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => {
      this.HTTPActivity = status;
    });
  }

  ngOnInit(){   
    this.store.dispatch(reminders({ reminders: remindersMock}));
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  onResized() {
    this.clientHeight = window.innerHeight;
  }

  onActivate() {
    window.scroll(0, 0);
  }

}
