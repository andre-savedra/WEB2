import type { Emprestimo } from "~/models/emprestimo";


export const salvarEmprestimo = async (emprestimoParaSalvar: Emprestimo):Promise<Emprestimo|null> => {
    const { data, error } = await useFetch<Emprestimo>('http://localhost:8000/api/auth/emprestimos/',{
        method: 'POST',
        body: JSON.stringify(emprestimoParaSalvar),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(error.value){
        console.error(error);
        return Promise.reject(null);
    }
    return Promise.resolve(data.value);
}