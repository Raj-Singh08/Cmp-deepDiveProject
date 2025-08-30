import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit{

   @ViewChild('form') form?:ElementRef<HTMLFormElement>; //@ViewChildern can be used to select multiple elements
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');  //using signal by viewChild method
//   @ViewChild
// Where it looks: Inside the view template (HTML) of the current component.
// Use case: To access a child component, directive, or DOM element that is declared in the same component’s template.

  ngOnInit(){
      console.log('ON INIT');
      console.log(this.form?.nativeElement);  //If insted of @ViewChild decorator we use signal, then we can asccess this
      //form eleemnt in OnInit also. right now we cannot
  }

  ngAfterViewInit(){
      console.log('After View INIT');
      console.log(this.form?.nativeElement);
//       When it Runs
// It runs after ngOnInit() and after the component’s template and child components have been fully rendered.
// It’s especially useful when you need to interact with DOM elements or child components retrieved via @ViewChild / @ViewChildren
  }

  onSubmit(title:string,ticketText:string){
    // const enteredTitle=titleElement.value;
    // console.log(enteredTitle);
    console.log(title);
    console.log(ticketText);
    // form.reset();   //clear all data from form
    // this.form?.nativeElement.reset();   //Used when using @ViewChild decorator not signal
    this.form?.nativeElement.reset();   //Used when using viewChild Signal
  }

}

