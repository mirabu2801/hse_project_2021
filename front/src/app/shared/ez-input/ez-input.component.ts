import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ez-input',
  templateUrl: './ez-input.component.html',
  styleUrls: ['./ez-input.component.scss']
})
export class EzInputComponent implements OnInit {

  constructor(public element: ElementRef) { }

  @Input() label;
  @Input() target;

  @ContentChild('inp', {static: false}) inp: ElementRef;

  flag = true;
  focusInput = false;

  inputs: any;

  f(): void{
    console.log(this.inp);
  }

  ngOnInit(): void {
    this.inputs = this.element.nativeElement.getElementsByTagName('input');
    console.log(this.inputs);
  }

}
