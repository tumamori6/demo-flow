import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { MainVisualComponent } from '../main-visual/main-visual.component';
import { TrendingComponent } from '../trending/trending.component';
import { HappeningNowComponent } from '../happening-now/happening-now.component';


@NgModule({
  declarations: [TopComponent, MainVisualComponent, TrendingComponent, HappeningNowComponent],
  imports: [
    CommonModule,
    TopRoutingModule
  ]
})
export class TopModule { }
