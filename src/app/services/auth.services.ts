import { Injectable, signal } from "@angular/core";

// é decorator e serve p transformar uma classe comum
// em um serviço que pode ser injetado em qualquer lugar
// da aplicação
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedKey = 'is_logged';
  isLoggedIn = signal<boolean>(this.checkStatus());

  private checkStatus(): boolean {
    return localStorage.getItem(this.loggedKey) === 'true';
  }

  login() {
    localStorage.setItem(this.loggedKey, 'true');
    this.isLoggedIn.set(true);
  }

  logout() {
    localStorage.removeItem(this.loggedKey);
    this.isLoggedIn.set(false);
  }
}
