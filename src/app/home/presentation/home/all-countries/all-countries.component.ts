import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Country } from 'src/app/core/domain/model/country';
import { CountryListState, HomePageState } from 'src/app/util/const';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AllCountriesComponent implements OnDestroy {
  @Input() allCountries: Country[] = [];

  constructor(private countryListState: CountryListState) {}

  ngOnDestroy(): void {
    this.countryListState.state = HomePageState.ALL_COUNTRIES;
  }
}
