import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryDTO } from '../datasource/dto/country-dto';
import {
  getMostPopulatedCountries,
  getLargestCountries,
  getLargestGdpCountries,
  getAllCountries,
} from '../datasource/mock-countries';
import { getCountryById } from '../datasource/mock-countries';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  getMostPopulatedCountries(): Observable<CountryDTO[]> {
    const countries = of(getMostPopulatedCountries());
    return countries;
  }
  getLargestCountries(): Observable<CountryDTO[]> {
    const countries = of(getLargestCountries());
    return countries;
  }
  
  getLargestGdpCountries(): Observable<CountryDTO[]> {
    const countries = of(getLargestGdpCountries());
    return countries;
  }
  getAllCountries(): Observable<CountryDTO[]> {
    const countries = of(getAllCountries());
    return countries;
  }

  getCountryById(id: number): Observable<CountryDTO> {
    const country = of(getCountryById(id));
    return country;
  }
}
