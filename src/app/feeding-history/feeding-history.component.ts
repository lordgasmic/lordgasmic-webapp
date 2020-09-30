import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';

@Component({
  selector: 'app-feeding-history',
  templateUrl: './feeding-history.component.html',
  styleUrls: ['./feeding-history.component.scss']
})
export class FeedingHistoryComponent implements OnInit {

  title = 'Population (in millions)';
   type = 'ColumnChart';
   data = [
      ["2012", 900, 390],
      ["2013", 1000, 400],
      ["2014", 1170, 440],
      ["2015", 1250, 480],
      ["2016", 1530, 540]
   ];
   columnNames = ['Year', 'Asia','Europe'];
   options = {   
      hAxis: {
         title: 'Year'
      },
      vAxis:{
         minValue:0
      },
      isStacked:true	  
   };
   width = 550;
   height = 400;

  constructor(private lordgasmicService: LordgasmicService) { }

  ngOnInit(): void {
    var feeds;
    this.lordgasmicService.getFeeds().subscribe(feedResonse => {
       feeds = feedResonse;
       console.log("feedResponse", feedResonse);
    });

  }

}
