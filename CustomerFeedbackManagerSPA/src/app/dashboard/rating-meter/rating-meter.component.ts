import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-meter',
  templateUrl: './rating-meter.component.html',
  styleUrls: ['./rating-meter.component.css']
})
export class RatingMeterComponent implements OnInit {
  public canvasWidth = 300
  public needleValue = 65
  public centralLabel = ''
  public name = '';
  public bottomLabel = '65'
  public options = {
    hasNeedle: true,
    needleColor: 'black',
    needleUpdateSpeed: 1000,
    arcColors: ['green', 'red'],
    arcDelimiters: [65],
    rangeLabel: ['0', '100'],
    needleStartValue: 0,
  }
  constructor() { }

  ngOnInit(): void {
  }

}

