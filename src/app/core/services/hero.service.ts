import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/core/models/hero';
import { Heroes } from 'src/app/core/models/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(Heroes);
  }
}
