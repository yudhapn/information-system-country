import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/presentation/home/home.component';
import { CountryDetailComponent } from './country-detail/presentation/country-detail/country-detail.component';
import { AllCountriesComponent } from './home/presentation/home/all-countries/all-countries.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'all', component: AllCountriesComponent },
  { path: 'country-detail/:country_id', component: CountryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
