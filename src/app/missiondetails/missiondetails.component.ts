import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  @Input() mission: Mission | undefined;
  @Output() value = new EventEmitter<boolean>();

  goToList(value:boolean){
    this.value.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }



}
