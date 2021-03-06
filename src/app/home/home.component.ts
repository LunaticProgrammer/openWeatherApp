import { Component, OnInit } from '@angular/core';
import {WeatherService} from 'src/app/services/weather.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
  }
  loc=""

  getWeather(){
     this.weatherService.getLocationWeather(this.loc).subscribe(res =>{
       console.log(res)
     })
  }

}
