import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];

  constructor(private _sidebarService: SidebarService) {
    this.menuItems = this._sidebarService.menu;
    console.log(this.menuItems);
  }

  ngOnInit(): void {
  }

}
