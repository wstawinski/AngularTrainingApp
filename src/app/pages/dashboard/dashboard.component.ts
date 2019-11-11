import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/core/models/hero';

import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'ata-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }

  ngOnInit() {
    this.getHeroes();
  }
}
