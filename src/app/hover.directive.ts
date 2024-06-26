import { Directive, ElementRef, Host, Input } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[hinvHover]',
  standalone: true
})
export class HoverDirective {

  @Input() color: string = 'lightyellow';

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }
}
