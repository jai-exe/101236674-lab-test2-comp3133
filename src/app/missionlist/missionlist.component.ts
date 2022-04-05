import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missionList: any;

  constructor( private service: SpacexapiService ) {
    this.service.getMissionData().subscribe(resp => {
      this.missionList = resp;
      console.log(this.missionList);
    });
   }

  ngOnInit(): void {
  }

}
