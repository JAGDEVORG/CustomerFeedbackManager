import { Component, OnInit } from '@angular/core';
import { NgxScannerQrcodeService, SelectedFiles } from 'ngx-scanner-qrcode';
// import {SafePipe} from '../../Shared/Pipes/safe.pipe'; 

@Component({
  selector: 'app-read-qrcode',
  templateUrl: './read-qrcode.component.html',
  styleUrls: ['./read-qrcode.component.css']
})

export class ReadQrcodeComponent implements OnInit {

  public output: string; public config: Object = {
    isAuto: true,
    text: { font: '25px serif' }, // Hiden { font: '0px' },
    frame: { lineWidth: 8 },
    medias: {
      audio: false,
      video: {
        facingMode: 'environment', // To require the rear camera https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    }
  };

  public selectedFiles: SelectedFiles[] = [];
  constructor(private qrcode: NgxScannerQrcodeService) { }

  ngOnInit(): void {
  }
  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, console.error);
  }

  public onSelects(files: any) {
    this.qrcode.loadFiles(files, this.config).subscribe(res => {
      this.selectedFiles = res.filter(f => f.urlQR);
      console.log(res); // v1.0.25 Fixed issue https://stackoverflow.com/questions/74245551/ngx-scanner-qrcode-reading-data-in-ts
    });
  }
}
