import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { ToastMessageService } from '../services/toast-message/toast-message.service';
import { FeedRequest } from '../models/FeedRequest';
import { UnitOfMeasure } from '../models/UnitOfMeasure';
import { Meridiem } from '../models/Meridiem';
import { Bottle } from '../models/Bottle';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.scss']
})
export class FeedingComponent implements OnInit {
  @ViewChild('date') date: ElementRef;
  @ViewChild('time_hour') timeHour: ElementRef;
  @ViewChild('time_minute') timeMinute: ElementRef;
  @ViewChild('given') given: ElementRef;
  @ViewChild('givenUom') givenUom: ElementRef;
  @ViewChild('tookItAll') tookItAll: ElementRef;
  @ViewChild('quantity') quantity: ElementRef;
  @ViewChild('quantityUom') quantityUom: ElementRef;
  @ViewChild('gas') gas: ElementRef;
  @ViewChild('probiotic') probiotic: ElementRef;
  @ViewChild('vitamin') vitamin: ElementRef;
  @ViewChild('note') note: ElementRef;
  @ViewChild('bottlesCompleted') bottlesCompleted: ElementRef;

  meridiem: boolean;
  unitOfMeasure: string[] = [];
  hours: number[] = [];
  minutes: string[] = ['00', '15', '30', '45'];
  bottles: Bottle[] = [];
  ordinal = 0;

  constructor(private lordgasmicService: LordgasmicService, private toastMessageService: ToastMessageService) {}

  ngOnInit(): void {
    this.meridiem = true;
    this.unitOfMeasure = Object.keys(UnitOfMeasure).filter((key) => isNaN(Number(key)));
    for (let i = 1; i <= 12; i++) {
      this.hours.push(i);
    }
  }

  public meridiemToggle(): void {
    this.meridiem = !this.meridiem;
  }

  submitFeed(): void {
    this.addBottle();
    const feed: FeedRequest = {
      date: this.date.nativeElement.value,
      timeHour: this.timeHour.nativeElement.value,
      timeMinute: this.timeMinute.nativeElement.value,
      meridiem: this.meridiem ? Meridiem.am : Meridiem.pm,
      bottles: this.bottles
    };

    this.lordgasmicService.putFeed(feed).subscribe(
      () => {
        this.toastMessageService.showToastMessage('Feed added successfully');
        this.reset();
      },
      () => {
        console.log('error');
      }
    );
  }

  reset(): void {
    this.date.nativeElement.value = '';
    this.timeHour.nativeElement.value = '';
    this.timeMinute.nativeElement.value = '';
    this.meridiem = true;
    this.resetBottle();
    this.bottlesCompleted.nativeElement.innerHTML = '';
    this.ordinal = 0;
  }

  resetBottle(): void {
    this.given.nativeElement.value = '';
    this.givenUom.nativeElement.selectedIndex = 0;
    this.tookItAll.nativeElement.checked = false;
    this.quantity.nativeElement.value = '';
    this.quantityUom.nativeElement.selectedIndex = 0;
    this.gas.nativeElement.checked = false;
    this.probiotic.nativeElement.checked = false;
    this.vitamin.nativeElement.checked = false;
    this.note.nativeElement.value = '';
  }

  addRow(): void {
    this.addBottle();
    this.resetBottle();
  }

  addBottle(): void {
    if (this.given.nativeElement.value) {
      const bottle: Bottle = {
        given: this.given.nativeElement.value,
        givenUom: this.givenUom.nativeElement.value,
        quantity: this.tookItAll.nativeElement.checked ? this.given.nativeElement.value : this.quantity.nativeElement.value,
        quantityUom: this.tookItAll.nativeElement.checked ? this.givenUom.nativeElement.value : this.quantityUom.nativeElement.value,
        vitamin: this.vitamin.nativeElement.checked,
        note: this.note.nativeElement.value,
        gas: this.gas.nativeElement.checked,
        probiotic: this.probiotic.nativeElement.checked,
        ordinal: this.ordinal++
      };
      this.bottles.push(bottle);
    }
  }
}
