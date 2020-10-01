import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEditReminderComponent } from './new-edit-reminder.component';


const routes: Routes = [
  {
    path: '',
    component: NewEditReminderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewEditReminderRoutingModule { }
