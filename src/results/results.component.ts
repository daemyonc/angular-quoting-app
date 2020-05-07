import { Component, Input } from '@angular/core';

@Component({
    selector: 'results-cmp',
    templateUrl: './results.component.html'
})

export class ResultsComponent {

  @Input() itemCost: number;
  @Input() blankCost: number;
  @Input() decoPrice: number;

  constructor() {
    this.itemCost = 0;
  }
}
