import {Injectable} from '@angular/core';
import {Menu} from "../interfaces/menu.interface";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: Menu[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Main', url: '/'},
        {title: 'ProgressBar', url: 'progress'},
        {title: 'Graphics', url: 'graphic-one'}
      ]
    },
  ]

  constructor() {
  }
}
