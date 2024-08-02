import { Component,OnInit ,ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  {DATA} from '../data';
import { DataService } from '../data.service';
import { startWith } from 'rxjs';
import { of, fromEvent,Observable } from "rxjs";
import { debounceTime, map,distinctUntilChanged,switchMap,tap } from "rxjs/operators";
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [[CommonModule, FormsModule]],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
 
  

})
export class SearchComponent  { //implements OnInit

  searchTermsHome: string = '';
  drophide: boolean = true;

   filteredSuggestions:  any[] = [];//{Company: string, ScriptCode: string, Symbol: string }
  
  @Output() suggestionSelected = new EventEmitter<any>();
  @Output() suggestionsUpdated = new EventEmitter<any[]>();

  constructor(private dataService: DataService) {}

  
  onSearchChange() {
    if (this.searchTermsHome) {
      this.dataService.getSuggestions(this.searchTermsHome).subscribe(suggestions => {
        this.filteredSuggestions = suggestions;
        this.drophide = false;
        this.emitSuggestionsUpdated();
      });
    } else {
      this.filteredSuggestions = [];
      this.drophide = true;
      this.emitSuggestionsUpdated();
    }
  }

  onFocus() {
    this.drophide = false;
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






  //   currentDate: string = '';
  //   currentTime: string = '';
  
  //   ngOnInit(): void {
  //     const now = new Date();
  //     this.currentDate = this.formatDate(now);
  //     this.currentTime = this.formatTime(now);
  //   }
  
  //   closeverdict(): void {
  //     this.showverdict = false;
  //   }
  
  //   private formatDate(date: Date): string {
  //     const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  //     return new Intl.DateTimeFormat('en-US', options).format(date);
  //   }
  
  //   private formatTime(date: Date): string {
  //     const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
  //     return new Intl.DateTimeFormat('en-US', options).format(date);
  //   }
  

   






