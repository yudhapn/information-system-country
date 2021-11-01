import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Country } from '../../../../core/domain/model/country';
import { CountryListState, HomePageState } from 'src/app/util/const';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TopCountriesComponent implements OnDestroy{
  @Input() mostPopulatedCountries: Country[] = [];
  @Input() largestCountries: Country[] = [];
  @Input() largestGdpCountries: Country[] = [];

  constructor(private countryListState: CountryListState) {}

  ngOnDestroy(): void {
    this.countryListState.state = HomePageState.TOP_COUNTRIES;
  }
}
