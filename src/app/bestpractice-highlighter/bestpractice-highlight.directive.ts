import { ElementRef } from '@angular/core';
import { Directive, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBestpracticeHighlight]'
})
export class BestpracticeHighlightDirective implements OnInit {
  @Input() defaultColor: string ="transparent";
  @Input() highlightColor: string ="green";
  @HostBinding('style.color') color: string = 'black';
  constructor(private els: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.els.nativeElement, 'backgroundColor', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.els.nativeElement, 'backgroundColor', this.highlightColor);
    this.color = 'navy';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.els.nativeElement, 'backgroundColor', this.defaultColor);
    this.color = 'black';
  }


}


// using this practice is safer in advanced cases rather than basic method

//HostBinding example you can access the Element ref properties such as style here
//and use it inside the HostListener

//to add own choice of colors we add input and set defaultcolor and highlight color
//this is added inside as a this.default etc
//then add inside the element you wish in html [defaultColor]= "red"
