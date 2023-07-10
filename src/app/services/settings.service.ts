import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _linkTheme = document.querySelector('#theme');
  private readonly _DEFAULT = './assets/css/colors/purple-dark.css';

  constructor() {
    const url = localStorage.getItem('theme') || this._DEFAULT;
    this._linkTheme!.setAttribute('href', url);
  }

  public changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this._linkTheme!.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  public checkCurrentTheme(): void {

    const links = document.querySelectorAll('.selector');

    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this._linkTheme!.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
  }

}
