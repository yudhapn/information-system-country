import { Injectable } from '@angular/core';

export enum HomePageState {
  TOP_COUNTRIES,
  ALL_COUNTRIES,
}

@Injectable({
  providedIn: 'root',
})
export class CountryListState {
  state = HomePageState.TOP_COUNTRIES;
}
