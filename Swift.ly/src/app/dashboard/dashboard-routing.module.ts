import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'dashboard/home',
    component: HomeComponent
  },
  {
    path: 'dashboard/deposit',
    component: DepositComponent
  },
  {
    path: 'dashboard/withdraw',
    component: WithdrawComponent
  },
  {
    path: 'dashboard/history',
    component: HistoryComponent
  },
  {
    path: '',
    redirectTo: 'dashboard/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
