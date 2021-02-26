import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { RoleConstants } from '../configuration/RoleConstants';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  name: string;
  roles: number;

  recipeEnabled = false;
  nopeEnabled = false;
  userEnabled = false;
  feedingEnabled = false ;

  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {
    this.lordgasmicService.getSessionInfo().subscribe((sessionInfo) => {
      this.name = sessionInfo.username;
      this.roles = sessionInfo.roles;

      this.recipeEnabled = false;
      this.nopeEnabled = false;

      // I hate this
      /* tslint:disable:no-bitwise */
      this.userEnabled = (RoleConstants.user & this.roles) === RoleConstants.user;
      this.feedingEnabled = (RoleConstants.feeding & this.roles) === RoleConstants.feeding;
      /* tslint:enable:no-bitwise */

      console.log('userDisabled', this.userEnabled);
    });
  }
}
