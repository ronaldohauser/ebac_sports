import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarItem, removerItem } from '../store/carrinhoSlice'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent: React.FC<Props> = ({
  produtos,
  favoritos,
  favoritar
}) => {
  const dispatch = useDispatch()
  const carrinho = useSelector((state: any) => state.carrinho)

  const handleAdicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(adicionarItem(produto.id))
  }

  const handleRemoverDoCarrinho = (produto: ProdutoType) => {
    dispatch(removerItem(produto.id))
  }

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={handleAdicionarAoCarrinho}
            aoRemoverDoCarrinho={handleRemoverDoCarrinho}
            carrinho={carrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
