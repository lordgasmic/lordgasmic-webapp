import { Component, Input, OnInit } from '@angular/core';
import { Funko } from '@models/funkos/Funko';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() funko: Funko;

  constructor() {}

  ngOnInit(): void {}
}
