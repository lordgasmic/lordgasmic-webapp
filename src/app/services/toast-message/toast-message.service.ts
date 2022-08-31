import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {
  constructor(private matSnackBar: MatSnackBar, private router: Router, private zone: NgZone) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.hideToastMessage();
      }
    });
  }

  showToastMessage(message: string, duration?: number): void {
    // this.zone.run(() => {
    this.matSnackBar.open(message, undefined, {
      duration: duration || 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    // });
  }

  hideToastMessage(): void {
    this.matSnackBar.dismiss();
  }
}
