
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../@core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GaugeChartModule } from 'angular-gauge-chart';

import {
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule,
    NbActionsModule,

    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
} from '@nebular/theme';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import {DashBoardComponent } from './dashboard.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { RatingMeterComponent } from './rating-meter/rating-meter.component';
import { CommanDashboardComponent } from './comman-dashboard/comman-dashboard.component';
@NgModule({
    imports: [
        GaugeChartModule,
        DashBoardRoutingModule,
        ThemeModule,
        NbMenuModule,
        ngFormsModule,
        FormsModule,
        ReactiveFormsModule,
        NbTabsetModule,
        NbRouteTabsetModule,
        NbStepperModule,
        NbButtonModule,
        NbListModule,
        NbAccordionModule,
        NbUserModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        NbSelectModule,
        NbIconModule,
        ngFormsModule
    ],
    exports: [RatingMeterComponent],
    declarations: [
        DashBoardComponent,
        RatingMeterComponent,
        CommanDashboardComponent
        ],
})
export class DashBoardModule {
}
