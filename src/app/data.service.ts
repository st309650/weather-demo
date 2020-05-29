import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  locationArray: string[];

  constructor() {
  }

  setLocationArray(locationArray: string[]) {
    this.locationArray = locationArray;
  }

  getLocationArray(): string[] {
    return this.locationArray;
  }
}
