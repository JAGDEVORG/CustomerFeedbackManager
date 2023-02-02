import { Component, OnInit } from '@angular/core';
import {DatasourceService} from '../../datasource.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  tableData: any;

  dtOptions: any;
  constructor(private dataService: DatasourceService, private router:Router) { }

  ngOnInit(): void {
    this.getDataFromSource();
  }

  getDataFromSource() {
    this.dataService.getData().subscribe(data => {
      this.tableData = data.data});
      this.dtOptions = {
        data: this.tableData,
        columns: [
          {title: 'ID', data: 'id'},
          {title: 'Email', data: 'email'},
          {title: 'First Name', data: 'first_name'},
          {title: 'Last Name', data: 'last_name'},
          {title: 'Avatar', data: 'avatar'},
        ]
      };
      
    }

    navigatetoCustomerList()
    {
      this.router.navigate(['dashboard/dashboard']);
    }
}
