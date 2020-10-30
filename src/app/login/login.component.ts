import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginRequest } from '../models/LoginRequest';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {}

  login(): void {
    const loginRequest = new LoginRequest();
    loginRequest.username = this.username.nativeElement.value;
    loginRequest.password = this.password.nativeElement.value;

    this.lordgasmicService.login(loginRequest).subscribe((value) => {
      console.log(value);
    });
  }
}
