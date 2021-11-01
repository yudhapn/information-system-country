import { Inject, Injectable } from '@angular/core';
import { Country } from '../../../core/domain/model/country';
import {
  CountriesRepository,
  CountriesRepositoryToken,
} from '../repository/countries-repository';

@Injectable()
export class GetMostPopulatedCountriesUsecase {
  constructor(
    @Inject(CountriesRepositoryToken)
    private countryRepository: CountriesRepository
  ) {}
  execute(): Country[] {
    return this.countryRepository.getMostPopulatedCountries();
  }
}
