import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardmoduleRoutingModule } from './dashboardmodule-routing.module';
import { DashboardmoduleComponent } from './dashboardmodule.component';
import { CommoncustdataComponent } from './commoncustdata/commoncustdata.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import { CustomerlistdataComponent } from './customerlistdata/customerlistdata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CustomerlistComponent} from '../dashboardmodule/customerlist/customerlist.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component'
import { GaugeChartModule } from 'angular-gauge-chart';
@NgModule({
  declarations: [
    DashboardmoduleComponent,
    CommoncustdataComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CustomerlistdataComponent,
    CustomerlistComponent,
    GaugeChartComponent
  ],
  imports: [
    GaugeChartModule,
    CommonModule,
    DashboardmoduleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardmoduleModule { }
