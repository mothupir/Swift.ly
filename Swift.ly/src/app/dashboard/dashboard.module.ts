import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [
    DepositComponent,
    WithdrawComponent,
    HistoryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    RadioButtonModule
  ]
})
export class DashboardModule { }
