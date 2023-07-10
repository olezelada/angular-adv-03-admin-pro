import { Component, OnInit } from '@angular/core';
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private _settingService: SettingsService) { }

  ngOnInit(): void {
    this._settingService.checkCurrentTheme();
  }

  public changeTheme(theme: string): void {
    this._settingService.changeTheme(theme);
  }
}
