import type { Livro } from "~/models/livro";


export const getLivros = async ():Promise<Array<Livro>> => {
    const { data, error } = await useFetch<Array<Livro>>('http://localhost:8000/api/auth/livros');

    if(error.value){
        console.error(error);
        return Promise.reject([]);
    }
    //const teste = data.value ?? [];
    //const teste2 = data.value;

    return Promise.resolve(data.value ?? []);
}