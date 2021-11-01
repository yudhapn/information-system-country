import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/core/domain/model/country';
import { CountryListState, HomePageState } from 'src/app/util/const';
import { CountryDetailViewModel } from './country-detail-view-model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country: Country = {} as Country;
  homePageState = HomePageState;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryDetailViewModel: CountryDetailViewModel,
    private location: Location,
    private countryListState: CountryListState,
    private router: Router
  ) {}

  ngOnInit(): void {
    const country_id = parseInt(this.activatedRoute.snapshot.params.country_id);
    this.country = this.countryDetailViewModel.getCountryById(country_id);
  }

  navigateToHome(state: HomePageState) {
    this.countryListState.state = state;
    this.router.navigate(['home']);
  }

  goBack(): void {
    this.location.back();
  }
}
