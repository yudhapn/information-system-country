import { Injectable } from '@angular/core';
import { Country } from 'src/app/core/domain/model/country';
import { GetCountryByIdUsecase } from '../../domain/usecase/get-country-by-id-usecase';

@Injectable()
export class CountryDetailViewModel {
  constructor(private getCountryByIdUsecase: GetCountryByIdUsecase) {}
  getCountryById(id: number): Country {
    return this.getCountryByIdUsecase.execute(id);
  }
}
