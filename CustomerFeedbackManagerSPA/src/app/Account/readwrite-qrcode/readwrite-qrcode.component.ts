import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readwrite-qrcode',
  templateUrl: './readwrite-qrcode.component.html',
  styleUrls: ['./readwrite-qrcode.component.css']
})
export class ReadwriteQrcodeComponent implements OnInit {

  constructor() { }
  isGenerate:boolean=false;
  isCreate:boolean=false;
  ngOnInit(): void {
  }
  generateQRCode(){
    this.isGenerate=true;
    this.isCreate=false;
  }
  readQRCode(){
   
    this.isGenerate=false;
    this.isCreate=true;
  }

}
