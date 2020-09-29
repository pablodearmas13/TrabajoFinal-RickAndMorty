import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select} from '@ngrx/store';

import { RickAndMortyService } from "../rick-and-morty.service";
import { HAMMER_LOADER } from '@angular/platform-browser';



type RequestInfo = {total:number;};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: any = <any>{};
  name: Array<any> = [];

  msg: string;
  errorMessage: string;

  locations: any = <any>[];
  
  typeLocation: Array<any> = [];
  dimensionLocation: Array<any> = [];
  
  
  
  urlLocation: any;

  

  constructor(private RickAndMortyService: RickAndMortyService ) {
  
   }

  ngOnInit(): void {
    
    this.RickAndMortyService.getAllCharacter();
    this.RickAndMortyService.getAllLocation(this.urlLocation);    
    console.log("Inyectado");
  }

  trae20Character()
  {   
    //this.characters = {};
    this.RickAndMortyService.getAllCharacter().subscribe(
      (res) =>{
        this.characters = res;
        //console.log("Los characters son:",this.characters);
        for(var i = 0; i < 20;i++)
        {
            this.name[i] = this.characters.results[i].name;
            //this.locations[i] = this.characters.results[i].location.url;  
            this.urlLocation = this.characters.results[i].location.url;
            this.trae20Location(this.urlLocation, i);
        }
       
      },
      (err) => {
        if (err.error && err.error.message) {
          alert(err.error.message);
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
  }


 trae20Location(urlLocation:string, posicion:number)
  {   
    this.RickAndMortyService.getAllLocation(this.urlLocation).subscribe(
      (res) =>{
        this.locations = res;
         //console.log(this.typeLocation);
         // console.log(this.typeLocation = this.locations.type);
         this.typeLocation[posicion] = this.locations.type;
         this.dimensionLocation[posicion] = this.locations.dimension;
        
      },
      (err) => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          console.log(err);
          console.log(err.error);
          this.errorMessage = err.error.message;
          this.msg = err.error.message;
          setTimeout(() => (this.errorMessage = ""), 2000);
          return;
        }
        alert("Error, un/os personaje/s no tiene locacion");
      },
      () => {}
    ); 

  }
  
































  resultFound() {
    // console.log(this.currentWeather);
    return Object.keys(this.characters).length > 0;
  }


 

}
