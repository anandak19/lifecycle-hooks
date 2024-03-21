import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { JobsComponent } from './jobs/jobs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, LifecycleComponent, JobsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  inputString: string | undefined;
  previousValue: string | undefined;
  currentValue: string | undefined;
  inputStringChanges = false;

  inputValue = 0;
  inputVal = '';

  generateNumber(){
    this.inputValue = Math.floor(Math.random() * 100)
  }

  submitClicked(inputEl : HTMLInputElement){
    this.inputVal = `Welcome ${inputEl.value} nice to meet you`;
  }


}
