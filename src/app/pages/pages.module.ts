import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    HeroesComponent,
    DashboardComponent,
    HeroDetailsComponent
  ],
  declarations: [
    HeroesComponent,
    DashboardComponent,
    HeroDetailsComponent
  ]
})
export class PagesModule { }
