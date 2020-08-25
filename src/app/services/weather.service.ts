import { Injectable } from '@angular/core';
import  {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  appid="c325610dfc8a2cf61ed69c2973aa7bc1"
  constructor(public http: HttpClient) { }

  getLocationWeather(location){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather/?q=${location}&APPID=${this.appid}`)
  }
}
