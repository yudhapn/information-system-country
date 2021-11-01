import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailComponent } from './presentation/country-detail/country-detail.component';
import { CountryDetailViewModel } from './presentation/country-detail/country-detail-view-model';
import { GetCountryByIdUsecase } from './domain/usecase/get-country-by-id-usecase';
import { CountryRepositoryToken } from './domain/repository/country-repository';
import { AppRoutingModule } from '../app-routing.module';
import { CountryRepositoryImpl } from './data/repository/country-repository-impl';

@NgModule({
  declarations: [CountryDetailComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: [
    { provide: CountryDetailViewModel, useClass: CountryDetailViewModel },
    { provide: GetCountryByIdUsecase, useClass: GetCountryByIdUsecase },
    { provide: CountryRepositoryToken, useClass: CountryRepositoryImpl },
  ],
})
export class CountryDetailModule {}
