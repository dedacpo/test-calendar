import { state } from '@angular/animations';
import { createReducer, on, Action } from '@ngrx/store';
import { ISelectedYearAndMonth } from "src/app/interfaces/SelectedYearAndMonth.model";
import * as trigger from './store.actions'


const _selectedYearAndMonth = createReducer({} as ISelectedYearAndMonth,
    on(trigger.selectedYearAndMonth, (state, action) => state = action['selectedYearAndMonth'] ? Object.assign(action['selectedYearAndMonth']) : state));

export function selectedYearAndMonthReducer(state: ISelectedYearAndMonth = {} as ISelectedYearAndMonth, action: Action){
    return _selectedYearAndMonth(state,action);
}