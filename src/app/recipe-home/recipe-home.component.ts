import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.scss']
})
export class RecipeHomeComponent implements OnInit {
  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {}
}
