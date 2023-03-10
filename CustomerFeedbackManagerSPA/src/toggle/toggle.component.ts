import { Component, Input, Output, EventEmitter, TemplateRef, ContentChild } from '@angular/core';

@Component({ 
exportAs: 'toggle',
selector: 'toggle',
template: `
<ng-container *ngTemplateOutlet="layoutTemplate; context: { on: this.on, toggle: this.toggle }">

</ng-container>
`,
})
export class ToggleComponent {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
  @ContentChild(TemplateRef)
  layoutTemplate: TemplateRef<any>; 
  toggle = () => {

    this.setOnState(!this.on);
  }

  setOnState(on: boolean) {
    this.on = on;
    this.toggled.emit(this.on);
  }

}
