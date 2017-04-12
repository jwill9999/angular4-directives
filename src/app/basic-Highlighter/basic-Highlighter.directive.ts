
import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
  selector: '[appBasicHighlighter]'
})

export class basicHighlighterDirective implements OnInit {

  constructor(private elementRef: ElementRef){

  }

  ngOnInit(){
  this.elementRef.nativeElement.style.backgroundColor = 'Yellow';
  }

}


// Inform appmodule that declarations needs to add this
