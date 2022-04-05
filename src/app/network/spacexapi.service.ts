import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  apiUrl = 'https://api.spacexdata.com/v3/launches';
  missionList: any;

  constructor(private http: HttpClient) { }

  getMissionData() {
    return this.http.get(this.apiUrl);
  }


}
