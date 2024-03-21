import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{
  @Input() inputValue?: number;
  currentValue?: number;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Input property changed', changes);

    if (changes['inputValue']) {
      this.currentValue = changes['inputValue'].currentValue;
    }
    
  }
}
