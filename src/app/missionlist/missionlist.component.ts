import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missionList: any;
  selectedMission?: Mission;
  showList: boolean = true;
  showDetails: boolean = false;

  constructor( private service: SpacexapiService ) {
    
   }

  ngOnInit(): void {
    this.service.getMissionData().subscribe(resp => {
      this.missionList = resp;
      console.log(this.missionList);
    });
  }

  onSelectMission(mission: Mission){
    this.selectedMission = mission;
    this.showList = false;
    this.showDetails = true;
  }

  goToList(value: boolean){
    this.showDetails = false;
    this.showList = value;
  }

}
