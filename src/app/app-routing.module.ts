import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { DisplayPageComponent } from './display-page/display-page.component';

const routes: Routes = [
  {path: 'search', component: SearchPageComponent},
  {path: 'weather', component: DisplayPageComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
