import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
  @Input() highlightColor?: string = 'Cyan';
  @Input() defaultColor?: string = 'LightCyan';
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') evidenzia() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') rilascia() {
    this.backgroundColor = this.defaultColor;
  }
}
