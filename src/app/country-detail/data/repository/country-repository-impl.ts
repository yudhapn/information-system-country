import { Country } from '../../../core/domain/model/country';
import { Injectable } from '@angular/core';
import { mapDtoToDomain } from '../../../core/data/datasource/dto/country-dto';
import { CountryRepository } from '../../domain/repository/country-repository';
import { CountryService } from 'src/app/core/data/service/country.service';

@Injectable()
export class CountryRepositoryImpl implements CountryRepository {
  private country: Country = {} as Country;

  constructor(private countryService: CountryService) {}

  getCountryById(id: number): Country {
    this.countryService
      .getCountryById(id)
      .subscribe((countryDTO) => (this.country = mapDtoToDomain(countryDTO)));
    return this.country;
  }
}
