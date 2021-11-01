import { Inject, Injectable } from '@angular/core';
import { Country } from '../../../core/domain/model/country';
import {
  CountryRepository,
  CountryRepositoryToken,
} from '../repository/country-repository';

@Injectable()
export class GetCountryByIdUsecase {
  constructor(
    @Inject(CountryRepositoryToken) private countryRepository: CountryRepository
  ) {}
  execute(id: number): Country {
    return this.countryRepository.getCountryById(id);
  }
}
