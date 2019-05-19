import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { states } from './states';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-best-state',
  templateUrl: './best-state.component.html',
  styleUrls: ['./best-state.component.scss'],
})
export class BestStateComponent {
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = states;

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice()))
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(
      state => state.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
