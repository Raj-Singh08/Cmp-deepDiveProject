import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,   //Disable style encapsulation, now the compoenent css will effect other componenet too
  //  if we apply it correctly like we are doing in this controlcss,Simply saying now it will work as global css
  host:{
    class:'control',   //add class to all host element
    '(click)': 'onClick1()'  //Event Binding
  }
})
export class ControlComponent {
//  @HostBinding('class') className = 'control';
// @HostListener('click')  onClick(){ console.log('clicked!');  }
  label = input.required<string>();

  onClick1(){
    console.log('clicked');  }

}
