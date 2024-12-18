import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import ComponenteNavLateral from "@/src/components/menu/class_componente_nav_lateral";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import ComponentCarrinhoCard from "@/src/components/cart/component_cardCart";

type PageCarrinhoParams = {
  key: number;
};

interface Produto {
  produtocodigo: number;
  produtodescricao: string;
  quantidade: number;
  produtopreco: number;
  totalPorProduto: number;
  produtoestoque: number;
  produtocategoria: number;
  imagem?: string;
}

export default function PageCarrinho() {
  const route = useRoute();
  const navigation = useNavigation();
  const { key } = route.params as PageCarrinhoParams;

  const [produtosCarrinho, setProdutosCarrinho] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const obterProdutosCarrinho = async () => {
      console.log('aq');
      
      try {
        const response = await axios.get(`http://localhost:3333/pedidos/produtos/status/1`);
        if (response.data.length > 0) {
          setProdutosCarrinho(response.data);
        } else {  
          setProdutosCarrinho([]); // Define o carrinho como vazio
        }
      } catch (error) {
        console.error("Erro ao obter os produtos do carrinho:", error);
      } finally {
        setCarregando(false);
      }
    };

    obterProdutosCarrinho();
  }, [key]);

  const calcularTotal = (produtos: Produto[]): number => {
    return produtos.reduce((acc, produto) => acc + produto.totalPorProduto, 0);
  };

  const finalizarPedido = async () => {
    try {
      await axios.patch(`http://localhost:3333/pedido/1/status`, {
        pedidoStatus: 2, // Alterar o status para concluído
      });

      alert("Pedido finalizado com sucesso!");
    } catch (error) {
      console.error("Erro ao finalizar o pedido:", error);
      alert("Erro ao finalizar o pedido. Tente novamente.");
    }
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
        
        {produtosCarrinho.length === 0 ? (
          <Text style={styles.mensagemTexto}>Nenhum pedido</Text>
        ) : (
          <ComponentCarrinhoCard
            numeroPedido={key.toString()}
            mesa="A1"
            data="2024-11-24"
            produtos={produtosCarrinho.map((produto) => ({
              key: produto.produtocodigo.toString(),
              nome: produto.produtodescricao,
              quantidade: produto.quantidade,
              preco: produto.produtopreco,
              imagem: produto.imagem || "https://guiadacozinha.com.br/wp-content/uploads/2019/11/hamburguer-mexicano.jpg",
            }))}
            total={calcularTotal(produtosCarrinho)}
            finalizarPedido={finalizarPedido}
          />
        )}
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
  mensagemTexto: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },
});
