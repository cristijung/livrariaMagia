// componente filho

import { Component, input, model, output } from '@angular/core';
import { LucideAngularModule, ShoppingCart, Plus, Minus, BookOpen } from 'lucide-angular';

@Component({
  selector: 'app-livro-card',
  imports: [LucideAngularModule],
  templateUrl: './livro-card.html',
  styleUrl: './livro-card.scss',
})
export class LivroCard {
  // @Input() --> forma base tradicional
  titulo = input<string>('');
  raridade = input<string>('');

  // two-way DB com Model
  quantidade = model(1);

  // manter o output apenar p a ação final de compra
  comprar = output<{ nome: string; qtd: number }>();

  readonly CartIcon = ShoppingCart;
  readonly PlusIcon = Plus;
  readonly MinusIcon = Minus;
  readonly BookIcon = BookOpen;

  alterarQtd(valor: number) {
    // atualizando o model --> o componente pai saberá da mudança instantaneamente.
    this.quantidade.update((atual) => Math.max(1, atual + valor));
  }

  notificarPai() {
    this.comprar.emit({
      nome: this.titulo(),
      qtd: this.quantidade(),
    });
  }
}
