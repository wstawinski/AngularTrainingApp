import { Component } from '@angular/core';

import { Hero } from 'src/app/core/hero';
import { Heroes } from 'src/app/core/heroes';

@Component({
  selector: 'ata-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent {
  heroes = Heroes;
  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
