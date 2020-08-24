import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LordgasmicService} from '../services/lordgasmic/lordgasmic.service';
import {Feed} from '../models/Feed';
import {UnitOfMeasure} from "../models/UnitOfMeasure";

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.scss']
})
export class FeedingComponent implements OnInit {

  @ViewChild('date') date: ElementRef;
  @ViewChild('time') time: ElementRef;
  @ViewChild('given') given: ElementRef;
  @ViewChild('givenUom') givenUom: ElementRef;
  @ViewChild('tookItAll') tookItAll: ElementRef;
  @ViewChild('quantity') quantity: ElementRef;
  @ViewChild('quantityUom') quantityUom: ElementRef;
  @ViewChild('vitamin') vitamin: ElementRef;

  meridiem: boolean;
  unitOfMeasure: UnitOfMeasure[] = [];

  constructor(private lordgasmicService: LordgasmicService) { }

  ngOnInit(): void {
    this.meridiem = true;
    this.unitOfMeasure.push(UnitOfMeasure.ml);
    this.unitOfMeasure.push(UnitOfMeasure.oz);
  }

  public meridiemToggle(): void {
    this.meridiem = !this.meridiem;
  }

  submitFeed(): void {
    let feed: Feed = {
      date: this.date.nativeElement.value,
      time: this.time.nativeElement.value,
      meridiem: this.meridiem,
      given: this.given.nativeElement.value,
      givenUom: this.givenUom.nativeElement.value,
      quantity: this.tookItAll.nativeElement.checked ? this.given.nativeElement.value : this.quantity.nativeElement.value,
      quantityUom: this.tookItAll.nativeElement.checked ? this.givenUom.nativeElement.value : this.quantityUom.nativeElement.value,
      vitamin: this.vitamin.nativeElement.checked
    };
    this.lordgasmicService.putFeed(feed);
  }
}
