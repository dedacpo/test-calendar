import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/calendar/calendar.module').then(m => m.CalendarModule)
  }, 
  {
    path: 'reminders/:date',
    loadChildren: () => import('./components/new-edit-reminder/new-edit-reminder.module').then(m => m.NewEditReminderModule)
  }, 
  {
    path: '**',redirectTo: ''   
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
