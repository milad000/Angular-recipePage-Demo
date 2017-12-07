import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDownMenu]'
})
export class DropDownMenuDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') openMenu(){
     this.isOpen = !this.isOpen;
  }
  @HostListener('mouseleave') closeMenu(){
    this.isOpen=false;
  }

}
