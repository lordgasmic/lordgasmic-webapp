import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { GasRequest } from '../models/GasRequest';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.scss'],
  providers: [DatePipe]
})
export class GasComponent implements AfterViewInit {
  @ViewChild('date') dateRef: ElementRef;
  @ViewChild('odd') odometerRef: ElementRef;
  @ViewChild('vehicle') vehicleRef: ElementRef;
  @ViewChild('gas') gasRef: ElementRef;
  @ViewChild('cost') costRef: ElementRef;

  date: string;

  dummyData = [
    { name: 'derp', value: 20 },
    { name: 'plop', value: 12 },
    { name: 'blah', value: 55 },
    {
      name: 'nerp',
      value: 34
    }
  ];

  constructor(private lordgasmicService: LordgasmicService, private datePipe: DatePipe) {
    const myDate = new Date();
    this.date = this.datePipe.transform(myDate, 'yyyy-MM-dd');
  }

  ngAfterViewInit(): void {
    this.dateRef.nativeElement.value = this.date;
  }

  submit(): void {
    const date = this.dateRef.nativeElement.value;
    const odometer = this.odometerRef.nativeElement.value;
    const vehicle = this.vehicleRef.nativeElement.value;
    const gas = this.gasRef.nativeElement.value;
    const cost = this.costRef.nativeElement.value;

    const request: GasRequest = {
      date,
      odometer,
      vehicle,
      gas,
      cost
    };

    this.lordgasmicService.addGas(request).subscribe((response) => {
      window.location.reload();
    });
  }
}
