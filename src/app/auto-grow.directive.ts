import {Directive, ElementRef, Renderer, HostListener} from '@angular/core'

@Directive({
  selector: '[autoGrow]'
})
export class AutoGrowDirective {
  constructor(private el: ElementRef, private renderer: Renderer){}

  @HostListener('focus') onFocus() {
    this.setWidth('500px');
  }

  @HostListener('blur') onBlur() {
    this.setWidth('120px');
  }

  private setWidth(width: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', width);
  }
}
