import React, { useEffect, useState } from "react";
import axios from "axios";
import ComponenteNavLateral from "@/src/components/menu/class_componente_nav_lateral";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import ComponentPedidoCard from "@/src/components/pedidos/component_cardpedido";
import { View, StyleSheet, ScrollView, Text } from "react-native";

interface Produto {
  produto_id: number;
  produto_nome: string;
  quantidade: number;
  preco_unitario: number;
}

interface Pedido {
  pedido_id: number;
  hora: string;
  observacao: string;
  total: number;
  produtos: Produto[];
}

export default function PageHistoricoPedido() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get("http://localhost:3333/pedidos/status/2");
        console.log(response);
  
        // Agrupar os produtos por pedido_id
        const pedidosFormatados = response.data.reduce((acc: any[], pedido: any) => {
          // Verifica se o pedido já existe no acumulador (por pedido_id)
          let pedidoExistente = acc.find((p: any) => p.pedido_id === pedido.pedido_id);
  
          if (pedidoExistente) {
            // Se o pedido já existe, apenas adiciona o produto à lista de produtos
            pedidoExistente.produtos.push({
              produto_id: pedido.produto_id,
              produto_nome: pedido.produto_nome,
              quantidade: pedido.quantidade,
              preco_unitario: parseFloat(pedido.preco_unitario),  // Certifique-se de que o valor seja numérico
            });
          } else {
            // Se o pedido não existir, cria um novo pedido com o produto
            acc.push({
              pedido_id: pedido.pedido_id,
              hora: pedido.hora,
              observacao: pedido.observacao,
              total: pedido.total,
              produtos: [{
                produto_id: pedido.produto_id,
                produto_nome: pedido.produto_nome,
                quantidade: pedido.quantidade,
                preco_unitario: parseFloat(pedido.preco_unitario),  // Certifique-se de que o valor seja numérico
              }],
            });
          }
  
          return acc;
        }, []);
  
        // Atualiza o estado com os pedidos formatados
        setPedidos(pedidosFormatados);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      } finally {
        setCarregando(false);
      }
    };
  
    fetchPedidos();
  }, []);

  if (carregando) {
    return (
      <View style={styles.containerPrincipal}>
        <Text>Carregando pedidos...</Text>
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
        <Text style={styles.tituloPage}>Historico de Pedidos</Text>
        {pedidos.map((pedido) => (
          <ComponentPedidoCard
            key={pedido.pedido_id}
            numeroPedido={pedido.pedido_id.toString()}
            produtos={pedido.produtos}
            data={pedido.hora}
            total={pedido.total}
          />
        ))}
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
  tituloPage: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "black",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    marginTop: 20,
    marginBottom: 20,
  },
});
