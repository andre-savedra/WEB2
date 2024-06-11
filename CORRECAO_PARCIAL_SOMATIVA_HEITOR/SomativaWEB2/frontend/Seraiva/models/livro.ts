export enum FORMATO_LIVRO {
    'E','F'
}

export enum STATUS_LIVRO {
    'P','A', 'C'
}

export type Categoria = {
    id: number;
    nome: string;
}

// export type Livro = {
//     titulo: string,
//     paginas: number,
//     descricao: string,
//     formato: FORMATO_LIVRO|null,
//     status: STATUS_LIVRO,
//     edicao: number,
//     autor: string,
//     anoPublicacao: string,
//     categoriFK: Categoria,
//     quantidade: number,
//     valor: number,
//     fotoCapa: string,
//     avaliacao: number,
// }


export class Livro {
    id: number = 0;
    titulo: string = '';
    paginas: number = 0;
    descricao: string = '';
    formato: FORMATO_LIVRO|null = null;
    status: STATUS_LIVRO = STATUS_LIVRO.P;
    edicao: number = 0;
    autor: string = '';
    anoPublicacao: string = '';
    categoriFK: Categoria = {
        id: 0,
        nome: ''
    };
    quantidade: number = 0;
    valor: number = 0;
    fotoCapa: string = '';
    avaliacao: number = 0;
}






