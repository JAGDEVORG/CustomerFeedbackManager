import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardmoduleComponent } from './dashboardmodule.component';
import {CommoncustdataComponent} from './commoncustdata/commoncustdata.component'
import {CustomerlistComponent} from '../dashboardmodule/customerlist/customerlist.component'

import {GaugeChartComponent} from './gauge-chart/gauge-chart.component'
const routes: Routes = [{
  path: '',
  component: DashboardmoduleComponent,
  children: [
    // {
    //   path: 'customer',
    //   component: CommoncustdataComponent
    // },
    {
      path: 'customer',
      component: CustomerlistComponent
    },
    {
      path: 'dashboard',
      component: GaugeChartComponent
    }
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardmoduleRoutingModule { }
