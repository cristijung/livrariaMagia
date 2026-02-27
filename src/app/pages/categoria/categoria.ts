// componente pai

import { Component } from '@angular/core';
import { LivroCard } from '../../components/livro-card/livro-card';

@Component({
  selector: 'app-categoria',
  imports: [LivroCard],
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class Categoria {
  carrinho: string[] = [];

  livrosDaCategoria = [
    { id: 10, nome: 'It - A Coisa', nivel: 'Épico'},
    { id: 12, nome: 'O Exorcista', nivel: 'Trevoso'},
  ];

  adicionarAoCarrinho(evento: any) {
    console.log(`Adicionado: ${evento.nome} com ${evento.qtd} unidades.`);
  }

}
