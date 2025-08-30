import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit{
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

  constructor(){
    // official lifecycle hooks like ngAfterViewInit, ngAfterContentInit, etc. But terms like afterRender and 
    // afterNextRender are not Angular lifecycle hooks — they actually come from Angular’s new rendering APIs introduced
    //  in Angular 17
    afterRender(()=>{
      console.log("AFTER Render");  //Renders after anything chnages in enitire applicaition
    });

    afterNextRender(()=>{
      console.log("AFter Next Render")    //After the next change in entire application
    });
//     afterNextRender()
// Runs only once, after the next render cycle.
// It won’t keep firing like afterRender.
// Useful for one-time DOM-related work that needs to happen only after the first render.
  }

  ngAfterContentInit() {
      //...
  }

  onClick1(){
    console.log('clicked');  
    console.log(this.el);
    // console.log(this.control);
    console.log(this.control());
  }
}
