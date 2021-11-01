import { CountryDTO } from './dto/country-dto';

const ALL_COUNTRIES: CountryDTO[] = [
  {
    id: 0,
    name: 'China',
    capital: 'Beijing',
    currency: 'Renminbi (Yuan)',
    gdp: 11199145,
    population: 1444216107,
    area: 9706961,
    flagImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png",
  },
  {
    id: 1,
    name: '	India',
    capital: 'New Delhi',
    currency: 'Rupee India',
    gdp: 14199145,
    population: 1393409038,
    area: 3287590,
    flagImageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
  },
  {
    id: 2,
    name: 'United States',
    capital: 'Washington, D.C.',
    currency: 'United States Dollar',
    gdp: 18569100,
    population: 332915073,
    area: 9372610,
    flagImageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    id: 3,
    name: 'Indonesia',
    capital: 'Jakarta',
    currency: 'Rupiah',
    gdp: 10193245,
    population: 276361783,
    area: 1904569,
    flagImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/255px-Flag_of_Indonesia.svg.png",
  },
  {
    id: 4,
    name: 'Pakistan',
    capital: 'Islamabad',
    currency: 'Rupee Pakistan',
    gdp: 9193245,
    population: 225199937,
    area: 881912,
    flagImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1280px-Flag_of_Pakistan.svg.png",
  },
  {
    id: 5,
    name: 'Brazil',
    capital: 'Brasília',
    currency: 'Real Brasil',
    gdp: 12193245,
    population: 213993437,
    area: 8515767,
    flagImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png",
  },
  {
    id: 6,
    name: 'Nigeria',
    capital: 'Abuja',
    currency: 'Naira Nigeria',
    gdp: 12193245,
    population: 211400708,
    area: 923768,
    flagImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/2560px-Flag_of_Nigeria.svg.png",
  },
  {
    id: 7,
    name: 'Bangladesh',
    capital: 'Dhaka',
    currency: 'Taka Bangladesh',
    gdp: 8193245,
    population: 166303498,
    area: 147570,
    flagImageUrl: "data:image/jpeg;base64,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",
  },
  {
    id: 8,
    name: 'Russia',
    capital: 'Moscow',
    currency: 'Russian Ruble',
    gdp: 1283162,
    population: 145912025,
    area: 17098242,
    flagImageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAElBMVEX////VKx4AOaYAGJ4AOq3fKgABXnTtAAAA9UlEQVR4nO3QsQGAQAwAoejr/ivb50pbGIEZAAAAAAAAAAAAAAAAAAAAAH47bHOzOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJzUP27xsc7E5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aQ+2jLMGymKnQ8AAAAASUVORK5CYII=",
  },
  {
    id: 9,
    name: 'Mexico',
    capital: 'Kota Meksiko',
    currency: 'Peso Meksiko',
    gdp: 1283162,
    population: 130262216,
    area: 1964375,
    flagImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_Mexico_%283-2%29.svg/1200px-Flag_of_Mexico_%283-2%29.svg.png",
  },
  {
    id: 10,
    name: 'Japan',
    capital: 'Tokyo',
    currency: 'Yen',
    gdp: 4939384,
    population: 126050804,
    area: 377930,
    flagImageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
  },
];

export function getMostPopulatedCountries(): CountryDTO[] {
  ALL_COUNTRIES.sort(sortCountriesByPopulation);
  return ALL_COUNTRIES.slice(0, 3);
}

export function getLargestCountries(): CountryDTO[] {
  ALL_COUNTRIES.sort(sortCountriesByArea);
  return ALL_COUNTRIES.slice(0, 3);
}

export function getLargestGdpCountries(): CountryDTO[] {
  ALL_COUNTRIES.sort(sortCountriesByGdp);
  return ALL_COUNTRIES.slice(0, 3);
}

export function getAllCountries(): CountryDTO[] {
  return ALL_COUNTRIES;
}

export function getCountryById(id: number): CountryDTO {
  const countryDTO = ALL_COUNTRIES.find((countryDTO) => countryDTO.id == id);
  if (countryDTO == undefined) {
    return {} as CountryDTO;
  } else {
    return countryDTO;
  }
}

function sortCountriesByPopulation(a: CountryDTO, b: CountryDTO) {
  return b.population - a.population;
}

function sortCountriesByArea(a: CountryDTO, b: CountryDTO) {
  return b.area - a.area;
}

function sortCountriesByGdp(a: CountryDTO, b: CountryDTO) {
  return b.gdp - a.gdp;
}
