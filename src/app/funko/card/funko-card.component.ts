import { Component, Input } from '@angular/core';
import { Funko } from '@models/funkos/Funko';

@Component({
  selector: 'app-funko-card',
  templateUrl: './funko-card.component.html',
  styleUrls: ['./funko-card.component.scss']
})
export class FunkoCardComponent {
  @Input() funko: Funko;

  constructor() {}
}
