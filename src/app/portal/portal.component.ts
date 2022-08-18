import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { RoleConstants } from '../configuration/RoleConstants';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  name: string;
  roles: number;

  recipeEnabled = false;
  nopeEnabled = false;
  userEnabled = false;
  feedingEnabled = false;
  memesEnabled = false;
  wineEnabled = false;
  funkoEnabled = false;
  gasEnabled = false;

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
      this.recipeEnabled = (RoleConstants.recipe & this.roles) === RoleConstants.recipe;
      this.memesEnabled = (RoleConstants.memes & this.roles) === RoleConstants.memes;
      this.wineEnabled = (RoleConstants.wine & this.roles) === RoleConstants.wine;
      this.funkoEnabled = (RoleConstants.funko & this.roles) === RoleConstants.funko;
      this.gasEnabled = (RoleConstants.gas & this.roles) === RoleConstants.gas;
      /* tslint:enable:no-bitwise */
    });
  }
}
