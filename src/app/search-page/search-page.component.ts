import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GeoService } from '../geo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  durationInSeconds = 5;
  cityInput: string;
  longitude: string;
  latitude: string;
  cityInfo: string[] = [''];

  locationFormControl = new FormControl('', [
    Validators.required]);

  constructor(private geoService: GeoService,
              private dataService: DataService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  getLocation() {
    if (this.locationFormControl.value) {
      this.cityInput = this.locationFormControl.value;
      this.geoService.getLongLat(this.cityInput).toPromise().then(
        result => {
          if (result !== undefined && result.status !== 200 && result.candidates.length > 0) {
            this.latitude = result.candidates[0].location.y;
            this.longitude = result.candidates[1].location.x;
            this.cityInfo.pop();
            this.cityInfo.push(this.cityInput, this.latitude, this.longitude);
            this.dataService.setLocationArray(this.cityInfo);
            this.router.navigate(['/weather']);
          } else {
            this.openSnackBar('An error has occurred', 'Dismiss');
          }
        }
      );
      // this.geoService.getLongLat(this.cityInput).subscribe(
      //   result => this.result = result
      // );
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.durationInSeconds * 500
    });
  }
}
