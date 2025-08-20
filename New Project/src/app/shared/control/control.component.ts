import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,   //Disable style encapsulation, now the compoenent css will effect other componenet too
  //  if we apply it correctly like we are doing in this controlcss,Simply saying now it will work as global css
  host:{
    class:'control'   //add class to all host element
  }
})
export class ControlComponent {
  label = input.required<string>();
}
