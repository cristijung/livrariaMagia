import { Component } from '@angular/core';
import { LucideAngularModule, BookOpen, ShoppingCart, User, LogOut } from 'lucide-angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  readonly BookIcon = BookOpen;
  readonly CartIcon = ShoppingCart;
  readonly UserIcons = User;
  readonly LogOutIcon = LogOut;

}
