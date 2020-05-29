import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.scss']
})
export class DisplayPageComponent implements OnInit {

  cityInfo: string[];

  weatherInfo: any;

  constructor(private weatherService: WeatherService,
              private dataService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cityInfo = this.dataService.getLocationArray();
    this.checkIfLocationAvailable();
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather().subscribe(
      result => this.weatherInfo = result
    );
  }

  checkIfLocationAvailable() {
    if (!this.cityInfo) {
      this.router.navigateByUrl('/search');
    }
  }

}
