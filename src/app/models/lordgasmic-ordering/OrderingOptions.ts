import { FormGroup } from '@angular/forms';
import { OrderingForm } from '@models/lordgasmic-ordering/OrderingForm';

export interface OrderingOptions {
  name: string;
  value: string;
  options: string[];
  formGroup: FormGroup<OrderingForm>;
}
