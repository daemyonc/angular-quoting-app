import { Component } from '@angular/core'
import { DataService } from 'src/app/data/data.service';

@Component({
    selector: 'search-cmp',
    templateUrl: './search.component.html'
})

export class SearchComponent {
  resultsList

  constructor(private dataService:DataService) {  }

  triggerSearch(event: string) {
    let searchRE = new RegExp(event.toUpperCase());
    return this.resultsList = this.dataService.getAllOurData().filter(srch => srch.product.match(searchRE));
  }

}
