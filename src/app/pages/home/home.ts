import { Component } from '@angular/core';
import { Livro } from '../../models/livro.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  listaLivros: Livro[] = [
    {
      id: 1,
      titulo: 'O Senhor dos Anéis',
      autor: 'J.R.R. Tolkien',
      preco: 59.9,
      capa: 'https://via.placeholder.com/150',
      categoria: 'Fantasia',
    },
    {
      id: 2,
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      preco: 34.0,
      capa: 'https://via.placeholder.com/150',
      categoria: 'Clássicos',
    },
  ];
}
