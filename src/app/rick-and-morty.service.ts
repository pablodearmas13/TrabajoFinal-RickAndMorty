import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

//import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }


  getAllCharacter()
  {
    return this.http.get(`${environment.apiUrl}/character/`);
  }

  getAllLocation(url: string)
  {
    return this.http.get(`${url}`);
  }

}
