import { InjectionToken } from '@angular/core';
import { Country } from '../../../core/domain/model/country';

export interface CountriesRepository {
  getMostPopulatedCountries(): Country[];
  getLargestCountries(): Country[];
  getLargestGdpCountries(): Country[];
  getAllCountries(): Country[];
}

export const CountriesRepositoryToken = new InjectionToken<CountriesRepository>(
  'CountriesRepositoryToken'
);
