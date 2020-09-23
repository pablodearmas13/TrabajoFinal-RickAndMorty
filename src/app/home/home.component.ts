import { Component, OnInit } from '@angular/core';

import { RickAndMortyService } from "../rick-and-morty.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: any = <any>{};
  msg: string;
  errorMessage: string;
 
  

  constructor(private RickAndMortyService: RickAndMortyService ) {
    
   }

  ngOnInit(): void {
    
    this.RickAndMortyService.get20Character();
    console.log("Inyectado");
  }

  trae20()
  {
    this.RickAndMortyService.get20Character().subscribe(
      (res) =>{
        this.characters = res;
        console.log(this.characters);
        
      },
      (err) => {
        if (err.error && err.error.message) {
          // alert(err.error.message);
          console.log(err);
          console.log(err.error);
          this.errorMessage = err.error.message;
          this.msg = err.error.message;
          setTimeout(() => (this.errorMessage = ""), 2000);
          return;
        }
        alert("Error al intentar conseguir los personajes.");
      },
      () => {}
    );
    



   /* searchWeatherTiempoActual(loc: string) {
      this.msg = "";
      this.currentWeather = {};
      this.weatherService.getCurrentWeather(loc).subscribe(
        (res) => {
          this.currentWeather = res;
          console.log(this.currentWeather);
        },
        (err) => {
          if (err.error && err.error.message) {
            // alert(err.error.message);
            console.log(err);
            console.log(err.error);
            this.errorMessage = err.error.message;
            this.msg = err.error.message;
            setTimeout(() => (this.errorMessage = ""), 2000);
            return;
          }
          alert("Error al intentar conseguir el clima.");
        },
        () => {}
      );
    }*/
  }

}
