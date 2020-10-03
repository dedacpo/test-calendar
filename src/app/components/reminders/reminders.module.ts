import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemindersRoutingModule } from './reminders-routing.module';
import { RemindersComponent } from './reminders.component';
import { OnLoadElementDirective } from 'src/app/shared/directives/onLoadElement.directive';


@NgModule({
  imports: [
    CommonModule,
    RemindersRoutingModule
  ],
  declarations: [RemindersComponent, OnLoadElementDirective]
})
export class RemindersModule { }
