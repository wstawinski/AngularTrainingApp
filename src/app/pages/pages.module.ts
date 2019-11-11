import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    HeroesComponent,
    DashboardComponent
  ],
  declarations: [
    HeroesComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
