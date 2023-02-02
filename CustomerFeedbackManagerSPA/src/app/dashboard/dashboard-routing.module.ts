import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashBoardComponent } from './dashboard.component';
import { CommanDashboardComponent } from './comman-dashboard/comman-dashboard.component';
const routes: Routes = [{
  path: '',
  component: DashBoardComponent,
  children: [
    {
      path: 'CommanDashBoard',
      component: CommanDashboardComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule {

}

