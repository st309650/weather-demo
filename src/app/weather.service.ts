import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  longitute: string;
  latitute: string;

  locationArray: string[];

  apiKey = 'YOUR_API_KEY';
  stormUrl = 'http://api.openweathermap.org/data/2.5/onecall?';

  constructor(private httpClient: HttpClient,
              private dataService: DataService) {
  }

  getWeather(): Observable<any> {
    this.locationArray = this.dataService.getLocationArray();
    this.latitute = this.locationArray[1];
    this.longitute = this.locationArray[2];
    const url = encodeURI(this.stormUrl + 'lat=' + this.latitute + '&' + 'lon=' + this.longitute +
      '&units=imperial&APPID=' + this.apiKey);
    return this.httpClient.get<any>(url).pipe(
      tap(_ => console.log('getting weather')),
      catchError(this.handleError<any>('getHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
