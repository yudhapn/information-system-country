import { Country } from 'src/app/core/domain/model/country';

export interface CountryDTO {
  id: number;
  name: string;
  capital: string;
  currency: string;
  gdp: number;
  population: number;
  area: number;
  flagImageUrl: string;
}

export function mapDtosToDomain(countriesDTO: CountryDTO[]): Country[] {
  return countriesDTO.map((countryDTO) => mapDtoToDomain(countryDTO));
}

export function mapDtoToDomain(countryDTO: CountryDTO): Country {
  return {
    id: countryDTO.id,
    name: countryDTO.name,
    capital: countryDTO.capital,
    currency: countryDTO.currency,
    gdp: countryDTO.gdp,
    population: countryDTO.population,
    area: countryDTO.area,
    flagImageUrl: countryDTO.flagImageUrl,
  };
}
