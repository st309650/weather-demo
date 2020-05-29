import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SearchPageComponent } from './search-page/search-page.component';
import { ReactiveFormsModule } from '@angular/forms';
// Ensure you are impoting BrowserAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GeoService } from './geo.service';
import { DisplayPageComponent } from './display-page/display-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,

    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule],
  providers: [
    GeoService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
