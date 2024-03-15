import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent {

  searchText = '';

  @Output() searchTextChanged = new EventEmitter<string>();

  constructor(){}

  onSearchTextChange(): void{
    this.searchTextChanged.emit(this.searchText);
  }

}
