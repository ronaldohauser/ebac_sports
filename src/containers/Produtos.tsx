import React from 'react';
import { useSelector } from 'react-redux';
import { useGetProdutosQuery } from '../services/api';
import Produto from '../components/Produto';
import { RootReducer } from '../store';
import * as S from './styles';

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery();
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens);

  if (isLoading) return <h2>Carregando...</h2>;

  const produtoEstaNosFavoritos = (produtoId: number) => favoritos.some((f) => f.id === produtoId);

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
        />
      ))}
    </S.Produtos>
  );
};

export default ProdutosComponent;
