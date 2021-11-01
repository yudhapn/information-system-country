import { CountriesRepository } from '../../domain/repository/countries-repository';
import { Country } from '../../../core/domain/model/country';
import { Injectable } from '@angular/core';
import { CountryService } from '../../../core/data/service/country.service';
import { mapDtosToDomain } from '../../../core/data/datasource/dto/country-dto';

@Injectable()
export class CountriesRepositoryImpl implements CountriesRepository {
  private countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getMostPopulatedCountries(): Country[] {
    this.countryService
      .getMostPopulatedCountries()
      .subscribe((countries) => (this.countries = mapDtosToDomain(countries)));
    return this.countries;
  }

  getLargestGdpCountries(): Country[] {
    this.countryService
      .getLargestGdpCountries()
      .subscribe((countries) => (this.countries = mapDtosToDomain(countries)));
    return this.countries;
  }

  getLargestCountries(): Country[] {
    this.countryService
      .getLargestCountries()
      .subscribe((countries) => (this.countries = mapDtosToDomain(countries)));
    return this.countries;
  }

  getAllCountries(): Country[] {
    this.countryService
      .getAllCountries()
      .subscribe((countries) => (this.countries = mapDtosToDomain(countries)));
    return this.countries;
  }
}
