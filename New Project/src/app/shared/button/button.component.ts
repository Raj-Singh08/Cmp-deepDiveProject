import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]',  //Any button element in project that also has appButton Attribute should be controled by this comp.
  //This is just attribute selector we have other selector too, like class selector etc
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
