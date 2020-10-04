import { createAction, props } from '@ngrx/store';
import { Reminder } from 'src/app/interfaces/Models/Reminder';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';


export const selectedYearAndMonth = createAction('[Calendar Component] SelectedYearAndMonth', props<{selectedYearAndMonth}>());

export const reminders = createAction('[Reminders Component] Reminders', props<{reminders: Reminder[]}>());