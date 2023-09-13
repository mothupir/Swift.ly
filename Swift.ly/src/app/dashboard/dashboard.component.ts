import { Component } from '@angular/core';
import { SpinnerService } from '../services/spinner/spinner.service';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sidebarVisible = false;

  connected = false;

  constructor(private spinner: SpinnerService, private theme: ThemeService) {
  }

  public connect(): void {
    this.spinner.show();
    !this.connected ? setTimeout(() => { 
          this.spinner.hide(); 
          this.connected = true;
        }, 5000) : setTimeout(() => { 
          this.spinner.hide(); 
          this.connected = false;
        }, 5000);
  }

  public changeTheme() {
    this.theme.change();
  }
}
