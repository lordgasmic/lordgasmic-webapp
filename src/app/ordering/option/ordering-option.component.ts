import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OrderingForm, OrderingOptionsForm, StaticOptionsForm } from '@models/lordgasmic-ordering/OrderingForm';

@Component({
  selector: 'app-ordering-option',
  templateUrl: './ordering-option.component.html',
  styleUrls: ['./ordering-option.component.scss']
})
export class OrderingOptionComponent implements OnInit {
  @Input()
  formGroup: FormGroup<OrderingForm>;
  @Input()
  options!: string[];
  @Input()
  name!: string;
  @Output()
  formGroupChange: EventEmitter<FormGroup<OrderingForm>> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  imDisabled = true;

  ngOnInit(): void {
    const sos = this.options.map((o) => {
      return this.fb.group<StaticOptionsForm>({
        name: new FormControl(o),
        value: new FormControl({ value: false, disabled: true })
      });
    });
    this.formGroup = this.fb.group<OrderingForm>({
      name: new FormControl(this.name),
      mainCheckbox: new FormControl(false),
      orderingOptions: this.fb.group<OrderingOptionsForm>({
        staticOptions: this.fb.array<FormGroup<StaticOptionsForm>>(sos),
        dynamicOptions: this.fb.array<FormControl<string>>([new FormControl({ value: '', disabled: true })])
      })
    });

    this.formGroup.controls.mainCheckbox.valueChanges.subscribe((value) => {
      this.imDisabled = !value;
      this.formGroup.controls.orderingOptions.controls.staticOptions.controls.forEach((fg) => {
        this.imDisabled ? fg.controls.value.disable() : fg.controls.value.enable();
      });
      this.formGroup.controls.orderingOptions.controls.dynamicOptions.controls.forEach((control) => {
        this.imDisabled ? control.disable() : control.enable();
      });
      this.formGroupChange.emit(this.formGroup);
    });

    this.formGroupChange.emit(this.formGroup);
  }

  addDynamicOptionRow(): void {
    this.formGroup.controls.orderingOptions.controls.dynamicOptions.controls.push(new FormControl(''));
  }

  removeDynamicOptionRow(index: number): void {
    this.formGroup.controls.orderingOptions.controls.dynamicOptions.controls.splice(index, 1);
  }
}
