import { Component, Input, OnInit } from '@angular/core';
import { Funko } from '@models/Funko';

@Component({
  selector: 'app-funko-card',
  templateUrl: './funko-card.component.html',
  styleUrls: ['./funko-card.component.scss']
})
export class FunkoCardComponent implements OnInit {

  @Input() funko: Funko;

  constructor() {
  }

  ngOnInit(): void {
  }

}
