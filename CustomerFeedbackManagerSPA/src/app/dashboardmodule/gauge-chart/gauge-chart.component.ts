import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements OnInit {
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
