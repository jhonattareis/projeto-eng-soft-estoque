import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-estoque',
  templateUrl: './navbar-estoque.component.html',
  styleUrls: ['./navbar-estoque.component.css']
})
export class NavbarEstoqueComponent {

  activeNavItem: string = '';

  setActiveNavItem(item: string): void {
    this.activeNavItem = item;
  }
}
