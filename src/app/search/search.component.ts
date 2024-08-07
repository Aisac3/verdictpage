import { Component,OnInit ,ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [[CommonModule, FormsModule]],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
 
  

})
 export class SearchComponent implements OnInit {

  searchTermsHome: string = '';
  drophide: boolean = true;

   filteredSuggestions:  any[] = [];
  
  @Output() suggestionSelected = new EventEmitter<any>();
  @Output() suggestionsUpdated = new EventEmitter<any[]>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    
  }

  onSearchChange() {
    if (this.searchTermsHome.trim().length > 0) {
      this.dataService.getSuggestions(this.searchTermsHome).subscribe(suggestions => {
        this.filteredSuggestions = suggestions;
        this.drophide = suggestions.length > 0 ? false : true;;
        this.emitSuggestionsUpdated();
      });
    } else {
      this.filteredSuggestions = [];
      this.drophide = true;
      this.emitSuggestionsUpdated();
    }
  }

  onFocus() {
    if(this.searchTermsHome.trim().length > 0){
    this.drophide = false;
    }
  }

  onBlur() {
    setTimeout(() => {
      this.drophide = true;
    }, 200);
  }

  selectSuggestion(entry: any) {
    this.suggestionSelected.emit(entry);
    this.filteredSuggestions = [];
    this.searchTermsHome = '';
    this.drophide = true;
  }

  emitSuggestionsUpdated() {
    this.suggestionsUpdated.emit(this.filteredSuggestions);
  }
}








   






