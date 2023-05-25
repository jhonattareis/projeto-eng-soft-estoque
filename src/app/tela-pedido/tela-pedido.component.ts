import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-pedido',
  templateUrl: './tela-pedido.component.html',
  styleUrls: ['./tela-pedido.component.css']
})
export class TelaPedidoComponent {

  items = [
    {
      id: 1,
      descricao: 'Whey protein 1kg',
      quantidade: 50,
      lote: '168532A',
      valor: 800.00
    },
    {
      id: 2,
      descricao: 'Creatina 300g',
      quantidade: 50,
      lote: '987565B',
      valor: 650.00
    },
    {
      id: 3,
      descricao: 'Bcaa 150g',
      quantidade: 30,
      lote: '312647C',
      valor: 500.00
    }
  ];

}
