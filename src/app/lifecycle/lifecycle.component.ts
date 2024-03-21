import { CommonModule } from '@angular/common';
import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  ChangeDetectionStrategy, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges 
} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  title = 'lifecycle-hooks';
  @Input() inputText? :string;
  message = ""

  countdown: number;
  timerInterval: any;

  constructor() {
    this.countdown = 10;
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.timerInterval);
        this.message ='Component gone';
      }
    }, 1000);
  }



  ngOnInit(): void {
    console.log("Init method called");
    this.message = 'Hello welcome to life cycle component';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('A change occoured , ngOnchanges is called');
  }

  changeMessage(){
    this.message = 'The message has been successfully changed';
  }

  ngDoCheck(): void { 
    console.log("ngDoCheck on lifecycle component called");
  }

  ngOnDestroy(): void {
    console.log("Component will destroy in 10 seconds");
    clearInterval(this.timerInterval);
  }

  ngAfterContentInit(): void {
    console.log("After content init is evoked")
  }

  ngAfterContentChecked(): void {
    console.log("After content check hook is evoked");
  }

  ngAfterViewInit(): void {
    console.log("After view init hook is evoked");
  }

  ngAfterViewChecked(): void {
    console.log("After view checked is evoked");
  }

}
