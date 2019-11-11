import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroDetailsComponent } from './hero-details/hero-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    HeroDetailsComponent
  ],
  declarations: [
    HeroDetailsComponent
  ]
})
export class SharedModule { }
