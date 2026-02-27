// componente pai

import { Component, inject, signal } from '@angular/core';
import { LivroCard } from '../../components/livro-card/livro-card';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Pokemon, PokemonServices } from '../../services/pokemon.services';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class Categoria {
  private pokemonService = inject(PokemonServices);

  pokemonList = signal<Pokemon[]>([]);

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe({
      next: (response) => {
        this.pokemonList.set(response.results);
      },
      error: (err) => {
        console.error("Deu erro", err);
      }
    })
  }

}
