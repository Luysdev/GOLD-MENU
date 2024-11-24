import React, { useState, useEffect } from "react";
import axios from "axios"; // Importando o axios para fazer as requisições HTTP
import { useRoute } from '@react-navigation/native';  // Usando o hook useRoute para acessar parâmetros da navegação

import ComponenteNavLateral from "@/src/components/menu/class_componente_nav_lateral";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ComponentCarrinhoCard from "@/src/components/cart/component_cardCart";

// Definindo os parâmetros que a tela vai receber
type PageCarrinhoParams = {
  key: number;
};

// Definindo a interface de produto
interface Produto {
  produtocodigo: number;
  produtodescricao: string;
  quantidade: number;
  produtopreco: number;
  totalPorProduto: number;
  produtoestoque: number;
  produtocategoria: number;
  imagem?: string; // Adicionando o campo imagem opcional
}

export default function PageCarrinho() {
  const route = useRoute();  // Pegando os parâmetros da navegação
  const [produtosCarrinho, setProdutosCarrinho] = useState<Produto[]>([]); // Estado para armazenar os produtos
  const [carregando, setCarregando] = useState(true); // Estado para indicar o carregamento dos dados

  // Tipando corretamente o 'route.params' com PageCarrinhoParams
  const { key } = route.params as PageCarrinhoParams; // Agora sabemos que o 'key' é um número

  useEffect(() => {
    const obterProdutosCarrinho = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/carrinho/1/produtos`); // Altere o ID conforme necessário
        const dadosCarrinho = response.data; // Obter os dados do carrinho

        setProdutosCarrinho(dadosCarrinho); // Atualiza o estado com os dados da API
        console.log(dadosCarrinho);
        
      } catch (error) {
        console.error("Erro ao obter os produtos do carrinho:", error);
      } finally {
        setCarregando(false); // Define carregando como falso após a requisição
      }
    };

    obterProdutosCarrinho();
  }, [key]);  // O efeito será executado sempre que o key mudar

  // Função para calcular o total dos produtos no carrinho
  const calcularTotal = (produtos: Produto[]): number => {
    return produtos.reduce((acc, produto) => acc + produto.totalPorProduto, 0);
  };

  if (carregando) {
    return (
      <View style={styles.containerPrincipal}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.nav}>
        <ComponenteNavSuperior selectedIconIndex={1} />
      </View>
      <View style={styles.navLateral}>
        <ComponenteNavLateral />
      </View>
      <ScrollView contentContainerStyle={styles.containerConteudo} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Carrinho</Text>
        <ComponentCarrinhoCard
          numeroPedido="1"
          mesa="A1"
          data="2024-11-24"
          produtos={produtosCarrinho.map((produto) => ({
            key: produto.produtocodigo.toString(),
            nome: produto.produtodescricao,
            quantidade: produto.quantidade,
            preco: produto.produtopreco,
            imagem: produto.imagem || 'https://guiadacozinha.com.br/wp-content/uploads/2019/11/hamburguer-mexicano.jpg',
          }))}
          total={calcularTotal(produtosCarrinho)}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#E8E1D4",
    flexDirection: "row",
  },
  nav: {
    width: "18%",
    height: "100%",
  },
  navLateral: {
    position: "absolute",
    right: 0,
    backgroundColor: "rgba(133, 113, 77, 1)",
    width: "70%",
    zIndex: 1,
  },
  containerConteudo: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
