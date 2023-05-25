import { Component } from '@angular/core';

export interface PeriodicElement {
    descricao: string;
    id: number;
    qtProd: number;
    dtCriacao: string;
    status: string;
    valorTotal: number;
    lote: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
{id: 1, descricao: 'Max Titanium - wey pretein 1kg, creatina 300g, bcaa 300g...', qtProd: 120, dtCriacao: '20/04/2023 - 10:21', status: 'Em andamento', valorTotal: 500, lote: 846849},
{id: 2, descricao: 'Atlhetica Nutrition - wey pretein 1kg, creatina 300g, bcaa 300g...', qtProd: 100, dtCriacao: '22/04/2023 - 10:21', status: 'Em andamento', valorTotal: 600, lote: 478563},
{id: 3, descricao: 'Vitafor - wey pretein 1kg, creatina 300g, bcaa 300g...', qtProd: 150, dtCriacao: '23/04/2023 - 10:21', status: 'Em andamento', valorTotal: 750, lote: 354681},
{id: 4, descricao: 'Max Titanium - wey pretein 1kg, creatina 300g, bcaa 300g...', qtProd: 200, dtCriacao: '24/04/2023 - 10:21', status: 'Em andamento', valorTotal: 800, lote: 132987},
{id: 5, descricao: 'Vitafor - wey pretein 1kg, creatina 300g, bcaa 300g...', qtProd: 215, dtCriacao: '25/04/2023 - 10:21', status: 'Em andamento', valorTotal: 900, lote: 462891},
{id: 6, descricao: 'Atlhetica Nutrition - wey pretein 1kg, creatina 300g, bcaa 300g...', qtProd: 85, dtCriacao: '26/04/2023 - 10:21', status: 'Em andamento', valorTotal: 250, lote: 357951},
{id: 7, descricao: 'Vitafor - wey pretein 1kg, creatina 300g, bcaa 300g...', qtProd: 110, dtCriacao: '27/04/2023 - 10:21', status: 'Em andamento', valorTotal: 300, lote: 376824},
{id: 0, descricao: '-', qtProd: 0, dtCriacao: '-', status: '-', valorTotal: 0, lote: 0},
{id: 0, descricao: '-', qtProd: 0, dtCriacao: '-', status: '-', valorTotal: 0, lote: 0},
];

@Component({
  selector: 'app-tabela-produto',
  templateUrl: './tabela-produto.component.html',
  styleUrls: ['./tabela-produto.component.css']
})
export class TabelaProdutoComponent {

    displayedColumns: string[] = ['id', 'descricao', 'qtProd', 'dtCriacao', 'status', 'valorTotal', 'lote','actions'];
    dataSource = ELEMENT_DATA;
}
