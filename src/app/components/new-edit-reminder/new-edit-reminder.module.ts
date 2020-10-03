import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEditReminderRoutingModule } from './new-edit-reminder-routing.module';
import { NewEditReminderComponent } from './new-edit-reminder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ColorChromeModule  } from 'ngx-color/chrome';

@NgModule({
  imports: [
    CommonModule,
    NewEditReminderRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    ColorChromeModule 
    
  ],
  declarations: [NewEditReminderComponent]
})
export class NewEditReminderModule { }
