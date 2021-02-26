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

  recipeDisabled = true;
  nopeDisabled = true;
  userDisabled = true;
  feedingDisabled = true;

  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {
    this.lordgasmicService.getSessionInfo().subscribe((sessionInfo) => {
      this.name = sessionInfo.username;
      this.roles = sessionInfo.roles;

      this.recipeDisabled = false;
      this.nopeDisabled = false;

      // I hate this
      /* tslint:disable:no-bitwise */
      this.userDisabled = (RoleConstants.user & this.roles) === RoleConstants.user;
      this.feedingDisabled = (RoleConstants.feeding & this.roles) === RoleConstants.feeding;
      /* tslint:enable:no-bitwise */

      console.log('userDisabled', this.userDisabled);
    });
  }
}
