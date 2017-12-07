import { Directive, OnInit, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoMargin]'
})
export class AutoMarginDirective implements OnInit {

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }


  ngOnInit(){
  this.renderer.setStyle(this.elRef.nativeElement, 'margin','Auto');
  this.renderer.setStyle(this.elRef.nativeElement, 'margin-top','50px');
  this.renderer.setStyle(this.elRef.nativeElement, 'height','300px');

  }

  @HostListener('mouseenter') mouseover(eventData:Event){
      this.renderer.setStyle(this.elRef.nativeElement, 'backgroud','blue');
  }
}
