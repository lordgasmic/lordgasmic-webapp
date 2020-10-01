import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { ToastMessageService } from '../services/toast-message/toast-message.service';
import { FeedRequest } from '../models/FeedRequest';
import { UnitOfMeasure } from '../models/UnitOfMeasure';
import { Meridiem } from '../models/Meridiem';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.scss'],
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
  @ViewChild('vitamin') vitamin: ElementRef;
  @ViewChild('note') note: ElementRef;

  meridiem: boolean;
  unitOfMeasure: string[] = [];
  hours: number[] = [];

  constructor(
    private lordgasmicService: LordgasmicService,
    private toastMessageService: ToastMessageService
  ) {}

  ngOnInit(): void {
    this.meridiem = true;
    this.unitOfMeasure = Object.keys(UnitOfMeasure).filter((key) =>
      isNaN(Number(key))
    );
    for (let i = 1; i <= 12; i++) {
      this.hours.push(i);
    }
  }

  public meridiemToggle(): void {
    this.meridiem = !this.meridiem;
  }

  submitFeed(): void {
    let feed: FeedRequest = {
      date: this.date.nativeElement.value,
      timeHour: this.timeHour.nativeElement.value,
      timeMinute: this.timeMinute.nativeElement.value,
      meridiem: this.meridiem ? Meridiem.am : Meridiem.pm,
      given: this.given.nativeElement.value,
      givenUom: this.givenUom.nativeElement.value,
      quantity: this.tookItAll.nativeElement.checked
        ? this.given.nativeElement.value
        : this.quantity.nativeElement.value,
      quantityUom: this.tookItAll.nativeElement.checked
        ? this.givenUom.nativeElement.value
        : this.quantityUom.nativeElement.value,
      vitamin: this.vitamin.nativeElement.checked,
      note: this.note.nativeElement.value,
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

  reset() {
    this.date.nativeElement.value = '';
    this.timeHour.nativeElement.value = '';
    this.timeMinute.nativeElement.value = '';
    this.meridiem = true;
    this.given.nativeElement.value = '';
    this.givenUom.nativeElement.value = '';
    this.tookItAll.nativeElement.checked = false;
    this.quantity.nativeElement.value = '';
    this.quantityUom.nativeElement.value = '';
    this.vitamin.nativeElement.checked = false;
    this.note.nativeElement.value = '';
  }
}
