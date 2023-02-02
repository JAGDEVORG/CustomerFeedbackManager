import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-toggle',
  template: `
    <div *ngIf="on">
    <p *appUnless="condition">
    (A) This paragraph is displayed because the condition is false.
    </p>
    
    <p *appUnless="!condition">
    (B) Although the condition is true,
    this paragraph is displayed because appUnless is set to false.
    </p>
    
    <p>
    The condition is currently
    <span>{{condition}}</span>.
    <button type="button" (click)="condition = !condition" >
        Toggle condition to {{condition ? 'false' : 'true'}}
    </button>
    </p>
    </div>
  `
})
export class MyToggleComponent  {
  condition = false;
  @Input() on: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
}
