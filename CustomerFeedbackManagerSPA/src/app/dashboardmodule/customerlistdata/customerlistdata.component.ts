import { Component, OnInit } from '@angular/core';
import {DatasourceService} from '../../datasource.service';
declare var $;
@Component({
  selector: 'app-customerlistdata',
  templateUrl: './customerlistdata.component.html',
  styleUrls: ['./customerlistdata.component.css']
})
export class CustomerlistdataComponent implements OnInit {
  tableData: any;

  dtOptions: any;
  table: any;
  dataTable: any;
  constructor(private dataService: DatasourceService) { }

  ngOnInit(): void {
    this.getDataFromSource();
  }

  getDataFromSource() {
    this.dataService.getData().subscribe(data => {
      this.tableData = data.data;
      // this.dtOptions = {
      //   data: this.tableData,
      //   columns: [
      //     {title: 'ID', data: 'id'},
      //     {title: 'Email', data: 'email'},
      //     {title: 'First Name', data: 'first_name'},
      //     {title: 'Last Name', data: 'last_name'},
      //     {title: 'Action', data: 'avatar'},
      //   ]
      // };
      
    });
    // err => {}, () => {
    //   this.dataTable = $(this.table.nativeElement);
    //   this.dataTable.DataTable(this.dtOptions);
    
    // });
  }

}
