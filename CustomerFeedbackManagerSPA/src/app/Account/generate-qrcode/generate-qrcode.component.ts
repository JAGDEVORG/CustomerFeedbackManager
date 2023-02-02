import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../../Service/http-service.service';

@Component({
  selector: 'app-generate-qrcode',
  templateUrl: './generate-qrcode.component.html',
  styleUrls: ['./generate-qrcode.component.css']
})
export class GenerateQrcodeComponent implements OnInit {
  userId: any;
  apiName = "UserAuth";
  constructor(
    private formBuilder: FormBuilder,
    private _httpServiceService: HttpServiceService) { }

  ngOnInit(): void {
  }

  // GenerateQRCode method
  GenerateQRCode() {
    let obj = {
      id: this.userId,
    }
    this._httpServiceService.postDataUsingMethodName(obj, this.apiName,"GenerateQRCode").subscribe(response => {
      if (response.isSuccess == true) {
        alert('Create Successfully')
      }
      else {
        alert('some error occur')
      }

    })
  }


}
