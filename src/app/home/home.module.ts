import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './presentation/home/home.component';
import { HomeViewModel } from './presentation/home/home-view-model';
import { GetMostPopulatedCountriesUsecase } from './domain/usecase/get-most-populated-countries-usecase';
import { CountriesRepositoryImpl } from './data/repository/countries-repository-impl';
import { CountriesRepositoryToken } from './domain/repository/countries-repository';
import { TopCountriesComponent } from './presentation/home/top-countries/top-countries.component';
import { AllCountriesComponent } from './presentation/home/all-countries/all-countries.component';
import { GetLargestCountriesUsecase } from './domain/usecase/get-largest-countries-usecase';
import { GetAllCountriesUsecase } from './domain/usecase/get-all-countries-usecase';
import { AppRoutingModule } from '../app-routing.module';
import { GetLargestGdpCountriesUsecase } from './domain/usecase/get-largest-gdp-countries-usecase';

@NgModule({
  declarations: [HomeComponent, TopCountriesComponent, AllCountriesComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: [
    {
      provide: HomeViewModel,
      useClass: HomeViewModel,
    },
    {
      provide: GetMostPopulatedCountriesUsecase,
      useClass: GetMostPopulatedCountriesUsecase,
    },
    {
      provide: GetLargestCountriesUsecase,
      useClass: GetLargestCountriesUsecase,
    },
    {
      provide: GetLargestGdpCountriesUsecase,
      useClass: GetLargestGdpCountriesUsecase,
    },
    {
      provide: GetAllCountriesUsecase,
      useClass: GetAllCountriesUsecase,
    },
    { provide: CountriesRepositoryToken, useClass: CountriesRepositoryImpl },
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
