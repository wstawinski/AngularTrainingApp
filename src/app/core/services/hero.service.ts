import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Hero } from 'src/app/core/models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesApiUrl = 'http://localhost:3000/heroes';

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesApiUrl);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesApiUrl}/${id}`;
    return this.httpClient.get<Hero>(url);
  }
}
