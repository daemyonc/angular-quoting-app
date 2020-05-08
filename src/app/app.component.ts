import { Component } from '@angular/core';
import { decoPricing } from './data/decoPricing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemCost: number;
  blankCost: number;
  decoMeth: string;
  qty: number;
  decoPrice: number;

  constructor() {
    this.decoMeth = 'SP';
    this.qty = 12;
  }

  calculateResults(cost: number, deco: string = 'SP', qty: number = 12) {
    this.itemCost = cost;
    this.blankCost = parseFloat((cost / .79).toFixed(2));
    this.decoPrice = parseFloat((this.blankCost + decoPricing[deco][qty]).toFixed(2));
  }
 }
