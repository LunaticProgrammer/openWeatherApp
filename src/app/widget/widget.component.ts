import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  constructor(private weatherService :WeatherService) { }

  ngOnInit(): void {
  }

  city="Weather"
  hasCity=false;
  loc=""
  main
  d = {}

  

  getWeather(){
    this.weatherService.getLocationWeather(this.loc).subscribe((data) =>{
      console.log(data)
      this.d = data
      this.city = data["name"];
      this.main=data["weather"][0]["main"]
      this.hasCity=true;
    },(error)=>{

      alert("not found")
    });
    
  }

  onChange(){

    this.hasCity=false;
    this.main=undefined;
    this.city="Weather"
  }

  
}
