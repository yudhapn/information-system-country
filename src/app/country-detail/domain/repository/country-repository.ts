import { InjectionToken } from '@angular/core';
import { Country } from '../../../core/domain/model/country';

export interface CountryRepository {
  getCountryById(id: number): Country;
}

export const CountryRepositoryToken = new InjectionToken<CountryRepository>("CountryRepositoryToken");