import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as storeReducers from './shared/store/store.reducer';
import { DialogComponent } from './shared/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HTTPListener, HTTPStatus } from './shared/services/httpInterceptor/http.interceptor';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { FooterComponent } from './shared/footer/footer.component';


 

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TopBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({
      selectedYearAndMonth: storeReducers.selectedYearAndMonthReducer,
      reminders: storeReducers.remindersReducer
    })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    HTTPStatus, 
    HTTPListener,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPListener,
      multi: true,
    }
  ],
  exports:[MatProgressSpinnerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
