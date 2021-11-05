import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url= 'https://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '495374dc3f2f953aa66d8100f17b3fdf';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any>{
    const URL = this.url + this.key + '&q=' + ciudad;
  return this.http.get(URL)
  }
}
