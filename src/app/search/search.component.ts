import { Component,OnInit ,ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DATA } from '../data';
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
export class SearchComponent implements OnInit {

  searchTermsHome: string = '';
  drophide: boolean = true;
  options: any[]=Object.values(DATA);//use data directly
  
  suggestions: { Company: string, ScriptCode: string, Symbol: string }[] = [
    { Company: 'Apple', ScriptCode: 'AAPL', Symbol: 'AAPL' },
    { Company: 'Banana', ScriptCode: 'AAp', Symbol: 'BNNA' },
    { Company: 'Cherry', ScriptCode: 'CHRY', Symbol: '' },
    { Company: 'Date', ScriptCode: '', Symbol: 'DATE' },
    { Company: 'Grape', ScriptCode: 'GRPE', Symbol: 'GRPE' },
    { Company: 'Orange', ScriptCode: 'ORNG', Symbol: 'ORNG' },
    { Company: 'Pineapple', ScriptCode: '', Symbol: 'PNPL' }
  ];
  filteredSuggestions:  any[] = [];//{Company: string, ScriptCode: string, Symbol: string }
  
  @Output() suggestionSelected = new EventEmitter<any>();

  onSearchChange(): void {
    console.log(DATA);
    this.drophide = false;
    if (this.searchTermsHome) {
      this.filteredSuggestions = this.suggestions.filter(suggestion =>
        suggestion.Company.toLowerCase().includes(this.searchTermsHome.toLowerCase())
      );
    } else {
      this.filteredSuggestions = [];
    }
    final:{
      console.log(this.filteredSuggestions)
      
    }
    
  }
  

  selectSuggestion(entry: { Company: string, ScriptCode: string, Symbol: string }): void {
    this.searchTermsHome = entry.Company;
    this.drophide = true;
   
  }

  onFocus(): void {
    this.drophide = false;
  }

  onBlur(): void {
    this.drophide = true;
  }

  pdf_search: number = 1;
    loader: boolean = false;
    showverdict: boolean = true;
    slide: boolean = true;
    verdictloader: boolean = false;
    regloader: boolean = false;
    verdictloadermessage: string = '';
    regloadermessage: string = '';
    loggedIn: boolean = false;
    coverpage: any = {
      stock_details: {
        short_name: 'Stock Name'
      }
    };
    currentDate: string = '';
    currentTime: string = '';
  
    ngOnInit(): void {
      const now = new Date();
      this.currentDate = this.formatDate(now);
      this.currentTime = this.formatTime(now);
    }
  
    closeverdict(): void {
      this.showverdict = false;
    }
  
    private formatDate(date: Date): string {
      const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }
  
    private formatTime(date: Date): string {
      const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }
  

   

}




