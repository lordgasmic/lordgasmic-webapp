import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface OrderingForm {
  name: FormControl<string>;
  mainCheckbox: FormControl<boolean>;
  orderingOptions: FormGroup<OrderingOptionsForm>;
}

export interface OrderingOptionsForm {
  staticOptions: FormArray<FormGroup<StaticOptionsForm>>;
  dynamicOptions: FormArray<FormControl<string>>;
}

export interface StaticOptionsForm {
  name: FormControl<string>;
  value: FormControl<boolean>;
}
