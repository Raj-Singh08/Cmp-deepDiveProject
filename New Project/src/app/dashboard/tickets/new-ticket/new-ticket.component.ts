import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class NewTicketComponent {

  @ViewChild('form') form?:ElementRef<HTMLFormElement>;
  

  onSubmit(title:string,ticketText:string){
    // const enteredTitle=titleElement.value;
    // console.log(enteredTitle);
    console.log(title);
    console.log(ticketText);
    // form.reset();   //clear all data from form
    this.form?.nativeElement.reset();
  }

}

