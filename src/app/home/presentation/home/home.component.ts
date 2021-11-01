import { Component, OnInit } from '@angular/core';
import { Country } from '../../../core/domain/model/country';
import { HomeViewModel } from './home-view-model';
import { CountryListState, HomePageState } from 'src/app/util/const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mostPopulatedCountries: Country[] = [];
  largestCountries: Country[] = [];
  largestGdpCountries: Country[] = [];
  allCountries: Country[] = [];
  currentCountryState = HomePageState.TOP_COUNTRIES;
  homePageState = HomePageState;

  constructor(
    private homeViewModel: HomeViewModel,
    countryListState: CountryListState
  ) {
    this.currentCountryState = countryListState.state;
  }

  ngOnInit(): void {
    this.mostPopulatedCountries =
      this.homeViewModel.getMostPopulatedCountries();
    this.largestCountries = this.homeViewModel.getLargestCountries();
    this.largestGdpCountries = this.homeViewModel.getLargestGdpCountries();
    this.allCountries = this.homeViewModel.getAllCountries();
  }

  onChangeCountryState(state: HomePageState) {
    this.currentCountryState = state;
  }
}
