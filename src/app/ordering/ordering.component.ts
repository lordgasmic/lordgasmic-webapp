import { Component, NgZone } from '@angular/core';
import { OrderingService } from '../services/ordering/ordering.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderingRequest } from '@models/OrderingRequest';
import { PrintType } from '@models/PrintType';
import { ToastMessageService } from '../services/toast-message/toast-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent {
  formGroup: FormGroup;
  checkboxOptions = [
    { name: 'Water', value: 'water' },
    { name: 'Salty Snacks', value: 'salty-snacks' },
    { name: 'Sweet Snacks', value: 'sweet-snacks' },
    { name: 'Wine', value: 'wine' },
    { name: 'Other', value: 'other' }
  ];

  constructor(
    private orderingService: OrderingService,
    private router: Router,
    private zone: NgZone,
    private toastService: ToastMessageService,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      selectedOptions: this.fb.array(
        this.checkboxOptions.map(() => false) // Initialize all checkboxes as unchecked
      )
    });
  }

  submit(): void {
    // todo build request object out of form group
    const properties: { [key: string]: string[] } = {};
    this.formGroup.value.selectedOptions.forEach((checked, i) => {
      if (checked) {
        properties[this.checkboxOptions[i].value] = [];
      }
    });
    const orderingRequest: OrderingRequest = { message: 'Wifey needy', type: PrintType.RECEIPT.toString(), properties };

    this.orderingService.placeOrder(orderingRequest).subscribe(() => {
      this.toastService.showToastMessage('Order submitted', 4000);
      this.zone.run(() => this.router.navigate([`/portal`]));
    });
  }
}
