import { Injectable } from '@angular/core';
import { GetMostPopulatedCountriesUsecase } from '../../domain/usecase/get-most-populated-countries-usecase';
import { GetLargestCountriesUsecase } from '../../domain/usecase/get-largest-countries-usecase';
import { GetAllCountriesUsecase } from '../../domain/usecase/get-all-countries-usecase';
import { GetLargestGdpCountriesUsecase } from '../../domain/usecase/get-largest-gdp-countries-usecase';

@Injectable()
export class HomeViewModel {
  constructor(
    private getMostPopulatedCountriesUsecase: GetMostPopulatedCountriesUsecase,
    private getLargestCountriesUsecase: GetLargestCountriesUsecase,
    private getAllCountriesUsecase: GetAllCountriesUsecase,
    private getLargestGdpCountriesUsecase: GetLargestGdpCountriesUsecase
  ) {}

  getMostPopulatedCountries() {
    return this.getMostPopulatedCountriesUsecase.execute();
  }

  getAllCountries() {
    return this.getAllCountriesUsecase.execute();
  }

  getLargestCountries() {
    return this.getLargestCountriesUsecase.execute();
  }
  getLargestGdpCountries() {
    return this.getLargestGdpCountriesUsecase.execute();
  }
}
