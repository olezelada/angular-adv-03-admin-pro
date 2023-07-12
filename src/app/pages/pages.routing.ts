import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {GraphicOneComponent} from "./graphic-one/graphic-one.component";
import {SettingComponent} from "./account-setting/setting.component";
import {PromesaComponent} from "./promesa/promesa.component";
import {RxjsComponent} from "./rxjs/rxjs.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
      {path: 'progress', component: ProgressComponent, data: {title: 'progress'}},
      {path: 'graphic-one', component: GraphicOneComponent, data: {title: 'graphic'}},
      {path: 'account-setting', component: SettingComponent, data: {title: 'settings'}},
      {path: 'promesa', component: PromesaComponent, data: {title: 'promise'}},
      {path: 'rxjs', component: RxjsComponent, data: {title: 'rxjs'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {

}
