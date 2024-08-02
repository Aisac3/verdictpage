import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATA } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getSuggestions(term: string): Observable<any[]> {
    const filteredSuggestions = DATA.search.filter(item =>
      item.Company.toLowerCase().includes(term.toLowerCase())
    );
    return of(filteredSuggestions);
  }

  getData(company: string): Observable<any> {
    const companyData = DATA.data.find(item => item.Company === company);
    return of(companyData);
  }
}
