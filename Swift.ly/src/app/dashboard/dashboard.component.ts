import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sidebarVisible = false;

  connected = false;

  selected: string | undefined;

  items: MenuItem[] = [
    {
      label: 'Deposit',
      icon: 'pi pi-fw pi-arrow-up-right'
    },
    {
      label: 'Withdraw',
      icon: 'pi pi-fw pi-arrow-down-left'
    },
    {
      label: 'History',
      icon: 'pi pi-fw pi-list'
    }
  ];
}
