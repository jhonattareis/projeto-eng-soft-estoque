import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TelaLoginComponent } from "./tela-login/tela-login.component";
import { TelaCadastroComponent } from "./tela-cadastro/tela-cadastro.component";
import { TelaPedidoComponent } from "./tela-pedido/tela-pedido.component";
import { TelaProdutoComponent } from "./tela-produto/tela-produto.component";
import { TelaFornecedorComponent } from "./tela-fornecedor/tela-fornecedor.component";
import { TelaUsuarioComponent } from "./tela-usuario/tela-usuario.component";

const routes: Routes = [
  {
    path: '',
    component: TelaLoginComponent
  },
  {
    path: 'cadastro',
    component: TelaCadastroComponent
  },
  {
    path: 'pedido',
    component: TelaPedidoComponent
  },
  {
    path: 'produto',
    component: TelaProdutoComponent
  },
  {
    path: 'fornecedor',
    component: TelaFornecedorComponent
  },
  {
    path: 'usuario',
    component: TelaUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
