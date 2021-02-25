import { Component, OnInit } from '@angular/core';
import {Swgoh} from "../models/Swgoh";

@Component({
  selector: 'app-approved-counters',
  templateUrl: './approved-counters.component.html',
  styleUrls: ['./approved-counters.component.scss']
})
export class ApprovedCountersComponent implements OnInit {

  teams: Swgoh[] = [];

  constructor() { }

  ngOnInit(): void {
    this.teams.push({name:"rey", png:"rey.png", counters:[]});
    this.teams.push({name:"cls", png:"cls.png", counters:[]});
    this.teams.push({name:"dr", png:"dr.png", counters:[]});
    this.teams.push({name:"gas", png:"gas.png", counters:[]});
    this.teams.push({name:"gg", png:"gg.png", counters:[]});
    this.teams.push({name:"geos", png:"geos.png", counters:[]});
  }

}
