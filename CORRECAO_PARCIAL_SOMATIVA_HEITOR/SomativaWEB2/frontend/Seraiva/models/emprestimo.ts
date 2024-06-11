import { Livro } from "./livro";
import { Usuario } from "./usuario";


export class Emprestimo {
    id: number|null = null;
    livroFK: Array<String> = [];
    usuarioFK: number = 0;
    dataEmprestimo: string|null = null;
    dataPrevista: string = '';
    dataDevolucao: string|null = null;
}