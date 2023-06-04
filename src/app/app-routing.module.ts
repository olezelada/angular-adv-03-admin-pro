import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import {PagesRoutingModule} from "./pages/pages.routing";
import {NopagesfoundComponent} from "./nopagesfound/nopagesfound.component";
import {AuthRoutingModule} from "./auth/auth.routing.module";


const ROUTES: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagesfoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
