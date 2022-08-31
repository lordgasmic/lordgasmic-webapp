import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { LoginRequest } from '../models/LoginRequest';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { Router } from '@angular/router';
import { WebappConstants } from '../configuration/WebappConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(private lordgasmicService: LordgasmicService, private router: Router, private zone: NgZone) {}

  ngOnInit(): void {}

  login(): void {
    const loginRequest = new LoginRequest();
    loginRequest.username = this.username.nativeElement.value;
    loginRequest.password = this.password.nativeElement.value;

    this.lordgasmicService.login(loginRequest).subscribe((value) => {
      let redirectUrl = '/portal';
      const previousPageUrl = this.getPreviousPageUrl();
      if (previousPageUrl) {
        redirectUrl = previousPageUrl;
      }
      this.zone.run(() => this.router.navigate([redirectUrl]));
    });
  }

  public getPreviousPageUrl(): string | null {
    try {
      return window.sessionStorage.getItem(WebappConstants.PREVIOUS_URL);
    } catch (e) {}
    return null;
  }
}
