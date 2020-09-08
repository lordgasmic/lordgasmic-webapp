import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private matSnackBar: MatSnackBar, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.hideToastMessage();
      }
    })
   }

  showToastMessage(message: string, duration?: number) {
    this.matSnackBar.open(message, undefined, {duration: duration || 5});
  }

   hideToastMessage() {
     this.matSnackBar.dismiss();
   }
}
