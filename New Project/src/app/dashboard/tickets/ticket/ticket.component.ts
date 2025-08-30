import { Component, input, output, signal } from '@angular/core';
import { TicketType } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<TicketType>({});
  detialsVisible = signal(false);
  closeTicket = output();
  onToggleDetails(){
    //this.detilsVisible.set(!this.detilsVisible());
    this.detialsVisible.update((OldValueVisible)=>!OldValueVisible)
  }
  onCloseTicket(){
    this.closeTicket.emit();
  }
}
