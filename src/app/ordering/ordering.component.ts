import { Component } from '@angular/core';
import { OrderingService } from '../services/ordering/ordering.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderingRequest } from '@models/OrderingRequest';

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

  constructor(private orderingService: OrderingService, private fb: FormBuilder) {
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
    const orderingRequest: OrderingRequest = { properties };

    console.log(orderingRequest);
    this.orderingService.placeOrder(orderingRequest).subscribe(() => {
      // todo
    });
  }
}
