import type { Produto } from "./produtos";
import type { Usuario } from "./usuario";

export enum PAGAMENTOS {
    'PENDENTE' = "P",
    'APROVADO' = "A",
    'CANCELADO' = "C",
    'RECUSADO' = "R",
}

export type Venda = {
    id?: number,
    usuarioFK: string;
    dataHora?: string;
    status: PAGAMENTOS
} 


export type VendasProduto = {
    produtoFK: Produto;
    quantidade: number;
    vendaFK: Venda;
}


export type VendasProdutoBody = {
    produtoFK: number;
    quantidade: number;
    vendaFK: number;
}