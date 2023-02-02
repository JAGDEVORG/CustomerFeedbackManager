import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
  }

  @Input() on :boolean;
  @Input() className:string;

}
