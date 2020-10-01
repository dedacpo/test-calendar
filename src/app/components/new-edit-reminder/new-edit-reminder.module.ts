import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEditReminderRoutingModule } from './new-edit-reminder-routing.module';
import { NewEditReminderComponent } from './new-edit-reminder.component';

@NgModule({
  imports: [
    CommonModule,
    NewEditReminderRoutingModule
  ],
  declarations: [NewEditReminderComponent]
})
export class NewEditReminderModule { }
