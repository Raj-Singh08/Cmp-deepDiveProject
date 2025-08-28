import { Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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

  private el = inject(ElementRef);    //ElementRef provide reference to some element that is redenred on the page

  //@ContentChild
  // Where it looks: Inside the projected content that is passed between <ng-content> tags.
  // Use case: To access a component, directive, or DOM element that the parent projects
  //  into the child using content projection (<ng-content>).
  // @ContentChild('input') private control?:ElementRef<HTMLInputElement|HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement|HTMLTextAreaElement>>('input');


  onClick1(){
    console.log('clicked');  
    console.log(this.el);
    // console.log(this.control);
    console.log(this.control());
  }
}
