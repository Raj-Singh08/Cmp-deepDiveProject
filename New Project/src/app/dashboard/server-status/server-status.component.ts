import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements  OnInit{
  currentStatus = signal<'online'|'offline'|'unknown'>('offline');
  // private interval?:ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  constructor(){ 
    effect(()=>{console.log(this.currentStatus())});//If we normally console currentStatus, angular will not setup a 
    //subscription and only once the value is printed but by use of effect function , we get the value whenever it is updated
    
   }



  //Runs when the componenent loads
  ngOnInit(){
    const interval=setInterval(()=>{
        const rnd = Math.random();
        if(rnd<0.5){
          this.currentStatus.set('online');
        }
        else if(rnd<0.9){
          this.currentStatus.set('offline');
        }
        else{
          this.currentStatus.set('unknown');
        }
    },5000);
    this.destroyRef.onDestroy(()=>{
      clearInterval(interval);
    })
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW INIT')
  }

  // ngOnDestroy() {
  //     clearTimeout(this.interval);
  // }
}
