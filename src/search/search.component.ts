import { Component, Output, EventEmitter } from '@angular/core'
import { DataService } from 'src/app/data/data.service';

@Component({
    selector: 'search-cmp',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  resultsList
  @Output() selectItemEvent = new EventEmitter();
  constructor(private dataService:DataService) { }

  triggerSearch(event: string) {
    let searchRE = new RegExp(event.toUpperCase());
    return this.resultsList = this.dataService.getAllOurData().filter(srch => srch.product.match(searchRE));
  }
  selectItem(value) {
    this.selectItemEvent.emit(value);
  }

}
