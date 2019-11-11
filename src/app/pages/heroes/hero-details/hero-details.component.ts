import { Component, Input } from '@angular/core';

import { Hero } from 'src/app/core/models/hero';

@Component({
  selector: 'ata-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent {
  @Input() hero: Hero;
}
