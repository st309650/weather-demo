import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  url: string;
  geocodeUrl = 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/';
  geocodePath = 'findAddressCandidates?';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getLongLat(location: string): Observable<any> {
    this.getUrl(location);
    return this.http.get(this.url).pipe(
      catchError(this.handleError(`get GeoLocation: ${location}`))
    );
  }

  getUrl(location: string) {
    const k = location.split(/[ ,]+/);
    this.url = encodeURI(this.geocodeUrl + this.geocodePath + 'City=' + k[0] + '&Region=' + k[1] + '&outFields=Place_addr&forStorage=false&f=json');
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('Error' + error);
      return of(result as T);
    };
  }
}
