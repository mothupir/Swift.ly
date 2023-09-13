import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDefault: boolean = true;
  private dark: string = "src/dark-theme.css";
  private light: string = "src/light-theme.css";

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public async change(): Promise<boolean> {
    console.log("entered");
    let theme = this.document.getElementById('app-theme') as HTMLLinkElement;
    console.log(theme);
    console.log("entered2");
    if (!theme) return this.isDefault;

    console.log("entered3");
    theme.href = this.isDefault ? this.light : this.dark;

    return this.isDefault = this.isDefault ? false : true;
  }
}
