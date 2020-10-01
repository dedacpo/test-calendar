import { createAction, props } from '@ngrx/store';
import { ISelectedYearAndMonth } from 'src/app/interfaces/SelectedYearAndMonth.model';


export const selectedYearAndMonth = createAction('[Calendar Component] SelectedYearAndMonth', props<{selectedYearAndMonth: ISelectedYearAndMonth}>());