import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from "../components/components.module";

import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {GraphicOneComponent} from "./graphic-one/graphic-one.component";
import {PagesComponent} from "./pages.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphicOneComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraphicOneComponent,
    PagesComponent
  ]
})
export class PagesModule {
}
