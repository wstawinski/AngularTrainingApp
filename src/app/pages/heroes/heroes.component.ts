import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/core/models/hero';

import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'ata-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
