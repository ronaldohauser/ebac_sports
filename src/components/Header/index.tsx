import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import cesta from '../../assets/cesta.png';
import { paraReal } from '../Produto';
import { RootReducer } from '../../store';

const Header = () => {
  const { itens, favorito } = useSelector((state: RootReducer) => ({
    itens: state.carrinho.itens,
    favorito: state.favorito.itens,
  }));

  const valorTotal = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favorito.length} favoritos</span>
        <img src={cesta} alt="Cesta de compras" />
        <span>{itens.length} itens, valor total: {paraReal(valorTotal)}</span>
      </div>
    </S.Header>
  );
};

export default Header;
