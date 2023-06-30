import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

import {ChartsModule} from "ng2-charts";

import { DonutComponent } from './donut/donut.component';
import { IncrementerComponent } from './incrementer/incrementer.component';



@NgModule({
  declarations: [
    IncrementerComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports:[
    IncrementerComponent,
    DonutComponent
  ]
})
export class ComponentsModule { }
