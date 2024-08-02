import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from "./results/results.component";
import { DATA } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'verdictpage';

  selectedOption: any = null;
  // selectedOptionData: any = null;

  onSuggestionSelected(entry: any) {
    this.selectedOption = entry; //entry.Company
    // this.selectedOptionData = DATA[this.selectedOption]; 
}

onClose() {
  this.selectedOption = null;
  // this.selectedOptionData = null;
}

}




