import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[]; 
}

@Injectable({
  providedIn: 'root',
})
export class PokemonServices {
  private http = inject(HttpClient);
  private apiUrl = "https://pokeapi.co/api/v2/pokemon";

  getPokemonList(): Observable<PokemonList>{
     return this.http.get<PokemonList>(this.apiUrl);
  }
}
