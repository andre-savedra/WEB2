import { BACKEND_URL } from "~/models/app";
import type { Venda, VendasProduto, VendasProdutoBody } from "~/models/vendas";

export const salvarVenda = async (venda: Venda): Promise<Venda | null> => {
  const {error,data} = await useFetch<Venda>(`${BACKEND_URL}/vendas/`, {
    method: 'POST',
    body: venda
  })

  if(error.value){
    console.log("error useFetch", error.value);
    return Promise.reject(null);
  }
  
  return Promise.resolve(data.value);

    /*.then(resposta => {
      console.log("success response")
      return Promise.resolve(resposta.data.value);
    })
    .catch(error => {
      console.log("error", error);
      return Promise.reject(null);
    })*/
};


export const salvarVendaProdutos = (vendas: Array<VendasProdutoBody>): Promise<VendasProduto | null> => {
  return useFetch<VendasProduto>(`${BACKEND_URL}/vendas-produtos/`, {
    method: 'POST',
    body: vendas
  })
    .then(resposta => {
      return Promise.resolve(resposta.data.value);
    })
    .catch(error => {
      console.log("error", error);
      return Promise.reject(null);
    })
};



