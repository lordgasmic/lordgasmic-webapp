import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface OrderingForm {
  rows: FormArray<FormGroup<OrderingRow>>;
}

export interface OrderingRow {
  name: FormControl<string>;
  selectedOption: FormControl<boolean>;
  additionalOptions: FormArray<FormControl<boolean>>;
  writeIn: FormControl<string>;
}
