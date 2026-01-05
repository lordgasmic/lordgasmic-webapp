import { FormGroup } from '@angular/forms';

export interface OrderingOptions {
  name: string;
  value: string;
  options: string[];
  formGroup: FormGroup;
}
