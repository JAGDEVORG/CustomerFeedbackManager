import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testng-template',
  templateUrl: './testng-template.component.html',
  styleUrls: ['./testng-template.component.css']
})
export class TestngTemplateComponent implements OnInit {

  constructor() { }
  public show=false;
  public on = true;
  condition = false;
  ngOnInit(): void {
  }
  onToggle(message, on) {
    debugger;
    console.log(message, on);
  }

}
