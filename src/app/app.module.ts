import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { NavbarEstoqueComponent } from './navbar-estoque/navbar-estoque.component';
import { TabelaComponent } from './tabela/tabela.component';
import { TelaProdutoComponent } from './tela-produto/tela-produto.component';
import { TelaPedidoComponent } from './tela-pedido/tela-pedido.component';
import { TelaFornecedorComponent } from './tela-fornecedor/tela-fornecedor.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaCadastroComponent,
    TelaLoginComponent,
    NavbarEstoqueComponent,
    TabelaComponent,
    TelaProdutoComponent,
    TelaPedidoComponent,
    TelaFornecedorComponent,
    TelaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
