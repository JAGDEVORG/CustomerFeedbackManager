import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'ngx-comman-dashboard',
  templateUrl: './comman-dashboard.component.html',
  styleUrls: ['./comman-dashboard.component.scss'],

})
export class CommanDashboardComponent implements OnInit, AfterViewInit {
  
  constructor(private _router: Router, public elementRef: ElementRef, private cdRef: ChangeDetectorRef,
    private formBuilder: FormBuilder, private dialogService: NbDialogService, public http: HttpClient,
    public datePipe: DatePipe) {
  }



  /* Pass Anonymous =true for skip the Intercepter */
  makeHttpCall() {
    this.http.get('https://jsonplaceholder.typicode.com/comments', { headers: { 'Anonymous': 'true' } })
      .subscribe((r) => {
        console.log(r);
      });
  }

  /* don't Pass Anonymous =true for skip the Intercepter */
  makeHttpCallWithToken() {
    this.http.get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((r) => {
        console.log(r);
      });
  }



  ngOnInit(): void {




  }


  ngAfterViewInit() {
  }





  //#region Filter

  initForm() {



  }


}


