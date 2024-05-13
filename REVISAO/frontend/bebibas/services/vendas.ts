import { BACKEND_URL } from "~/models/app";
import type { Venda, VendasProduto, VendasProdutoBody } from "~/models/vendas";

export const salvarVenda = (venda: Venda): Promise<Venda | null> => {
  return useFetch<Venda>(`${BACKEND_URL}/vendas/`, {
    method: 'POST',
    body: venda
  })
    .then(resposta => {
      return Promise.resolve(resposta.data.value);
    })
    .catch(error => {
      console.log("error", error);
      return Promise.resolve(null);
    })
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
      return Promise.resolve(null);
    })
};



