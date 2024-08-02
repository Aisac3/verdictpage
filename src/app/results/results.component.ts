import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  imports: [CommonModule]
})
export class ResultsComponent implements OnChanges {
  @Input() selectedOption: any;
  @Output() close = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedOption'] && changes['selectedOption'].currentValue) {
      console.log('Selected Option:', changes['selectedOption'].currentValue);
    }
  }
  
  

  closeData() {
    this.close.emit();
  }
}
