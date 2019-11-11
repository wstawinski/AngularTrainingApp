import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    HeroesComponent
  ],
  declarations: [
    HeroesComponent,
    HeroDetailsComponent
  ]
})
export class HeroesModule { }
