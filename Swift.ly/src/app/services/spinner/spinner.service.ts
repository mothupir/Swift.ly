import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinner: HTMLElement | null;

  constructor() { 
    this.spinner = document.getElementById('spinner');
  }

  public show() {
    if (this.spinner) {
      this.spinner.style.display = 'block';
    }
  }

  public hide() {
    if (this.spinner) {
      this.spinner.style.display = 'none';
    }
  }
}
