import { Component } from '@angular/core';

export interface PeriodicElement {
    fornecedor: string;
    id: number;
    cnpj: string;
    telefone: string;
    email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{id: 1, fornecedor: 'H9 distribuidora de suplementos', cnpj: '12.345.678/0001-00' , telefone: '(16)99455-3332', email: 'empresa@empresa.com.br'},
{id: 2, fornecedor: 'Atacado Suplementos', cnpj: '12.345.678/0001-00' , telefone: '(16)99455-3332', email: 'empresa@empresa.com.br'},
{id: 3, fornecedor: 'Fábrica de Suplementos', cnpj: '12.345.678/0001-00' , telefone: '(16)99455-3332', email: 'empresa@empresa.com.br'},
{id: 4, fornecedor: 'Nutricertta Suplementos', cnpj: '12.345.678/0001-00' , telefone: '(16)99455-3332', email: 'empresa@empresa.com.br'},
{id: 5, fornecedor: 'Real Suplementos', cnpj: '12.345.678/0001-00' , telefone: '(16)99455-3332', email: 'empresa@empresa.com.br'},
{id: 6, fornecedor: 'Fitness Suplementos', cnpj: '12.345.678/0001-00', telefone: '(16)99455-3332', email: 'empresa@empresa.com.br'},
{id: 7, fornecedor: 'shape fitness suplementos', cnpj: '12.345.678/0001-00' , telefone: '(16)99455-3332', email: 'empresa@empresa.com.br'},
{id: 0, fornecedor: '-', cnpj: '-', telefone: '-', email: '-'},
{id: 0, fornecedor: '-', cnpj: '-', telefone: '-', email: '-'},
];

@Component({
  selector: 'app-tabela-fornecedores',
  templateUrl: './tabela-fornecedores.component.html',
  styleUrls: ['./tabela-fornecedores.component.css']
})
export class TabelaFornecedoresComponent {

    displayedColumns: string[] = ['id', 'fornecedor', 'cnpj', 'telefone', 'email', 'actions'];
    dataSource = ELEMENT_DATA;
}
