import { BACKEND_URL } from "~/models/app";
import type { Pagination } from "~/models/pagination";
import type { Produto } from "~/models/produtos";

export const getProdutos = (numeroPagina: number = 0): Promise<Pagination<Produto>|null>  => {
  return useFetch<Pagination<Produto>>(
    `${BACKEND_URL}/produtos?page=${numeroPagina}`)
    .then(resposta=> {
      return Promise.resolve(resposta.data.value);      
    })
    .catch(error=>{
      console.log("error", error);
      return Promise.reject(null);
    })  
};

export const getProduto = (idDoProduto: string): Promise<Produto|null>  => {
  return useFetch<Produto>(
    `${BACKEND_URL}/produtos${idDoProduto}`)
    .then(resposta=> {
      return Promise.resolve(resposta.data.value);      
    })
    .catch(error=>{
      console.log("error", error);
      return Promise.reject(null);
    })  
};
