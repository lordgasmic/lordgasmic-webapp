import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginRequest } from '../models/LoginRequest';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private lordgasmicService: LordgasmicService, 
    private router: Router, 
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private zone: NgZone
  ) {}

  login(): void {
    if (!this.form.valid) {
      return;
    }

    this.lordgasmicService.login(this.form.value as LoginRequest).subscribe(
      (value) => {
        this.zone.run(() => this.router.navigate(['/portal']));
      },
      (error) => {
        this.snackBar.open('Username or password is incorrect.', 'Close');
      }
    );
  }
}
