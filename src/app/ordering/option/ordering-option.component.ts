import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OrderingForm, OrderingOptionsForm, StaticOptionsForm } from '@models/lordgasmic-ordering/OrderingForm';
import { OrderingOptions } from '@models/lordgasmic-ordering/OrderingOptions';

@Component({
  selector: 'app-ordering-option',
  templateUrl: './ordering-option.component.html',
  styleUrls: ['./ordering-option.component.scss']
})
export class OrderingOptionComponent implements OnInit {
  @Input()
  orderingOptions!: OrderingOptions;
  @Output()
  orderingOptionsChange: EventEmitter<OrderingOptions> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  imDisabled = true;

  ngOnInit(): void {
    const sos = this.orderingOptions.options.map((o) => {
      return this.fb.group<StaticOptionsForm>({
        name: new FormControl(o),
        value: new FormControl({ value: false, disabled: true })
      });
    });
    this.orderingOptions.formGroup = this.fb.group<OrderingForm>({
      name: new FormControl(this.orderingOptions.name),
      mainCheckbox: new FormControl(false),
      orderingOptions: this.fb.group<OrderingOptionsForm>({
        staticOptions: this.fb.array<FormGroup<StaticOptionsForm>>(sos),
        dynamicOptions: this.fb.array<FormControl<string>>([new FormControl({ value: '', disabled: true })])
      })
    });

    this.orderingOptions.formGroup.controls.mainCheckbox.valueChanges.subscribe((value) => {
      this.imDisabled = !value;
      this.orderingOptions.formGroup.controls.orderingOptions.controls.staticOptions.controls.forEach((fg) => {
        this.imDisabled ? fg.controls.value.disable() : fg.controls.value.enable();
      });
      this.orderingOptions.formGroup.controls.orderingOptions.controls.dynamicOptions.controls.forEach((control) => {
        this.imDisabled ? control.disable() : control.enable();
      });
      this.orderingOptionsChange.emit(this.orderingOptions);
    });
  }

  addDynamicOptionRow(): void {
    this.orderingOptions.formGroup.controls.orderingOptions.controls.dynamicOptions.controls.push(new FormControl(''));
  }

  removeDynamicOptionRow(index: number): void {
    this.orderingOptions.formGroup.controls.orderingOptions.controls.dynamicOptions.controls.splice(index, 1);
  }
}
