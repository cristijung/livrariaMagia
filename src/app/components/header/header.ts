import { Component, inject } from '@angular/core';
import { LucideAngularModule, BookOpen, ShoppingCart, User, LogOut } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.services';


@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // injetando o serviço na classe
  private authService = inject(AuthService);
  // criando 1 referência p o signal de login
  isLogged = this.authService.isLoggedIn;


  readonly BookIcon = BookOpen;
  readonly CartIcon = ShoppingCart;
  readonly UserIcons = User;
  readonly LogOutIcon = LogOut;

  entrar() {
    this.authService.login();
  }

  sair() {
    this.authService.logout
  }

}
