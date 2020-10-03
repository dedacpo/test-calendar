import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemindersComponent } from './reminders.component';


const routes: Routes = [
  {
    path: '',
    component: RemindersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemindersRoutingModule { }
