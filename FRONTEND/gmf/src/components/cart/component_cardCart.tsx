import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

interface Produto {
  nome: string;
  quantidade: number;
  preco: number;
  imagem: any; // Alterado para suportar imagens locais com `require`
}

interface PedidoCardProps {
  numeroPedido: string;
  mesa: string;
  data: string;
  produtos: Produto[];
  total: number;
}

const ComponentCarrinhoCard: React.FC<PedidoCardProps> = ({ numeroPedido, mesa, data, produtos, total }) => {
  const [quantidades, setQuantidades] = useState(produtos.map((produto) => produto.quantidade));

  const aumentarQuantidade = (index: number) => {
    const novasQuantidades = [...quantidades];
    novasQuantidades[index] += 1;
    setQuantidades(novasQuantidades);
  };

  const diminuirQuantidade = (index: number) => {
    const novasQuantidades = [...quantidades];
    if (novasQuantidades[index] > 0) {
      novasQuantidades[index] -= 1;
    }
    setQuantidades(novasQuantidades);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Pedido #{numeroPedido}</Text>
        <Text style={styles.mesa}>Mesa: {mesa}</Text>
        <Text style={styles.date}>Data: {data}</Text>
      </View>

      <ScrollView style={styles.body}>
        <Text style={styles.subtitle}>Produtos</Text>
        {produtos.map((produto, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.itemText}>
              {/* Imagem com suporte a arquivos locais */}
              <Image source={produto.imagem} style={styles.itemImage} />
              <Text style={styles.itemName}>{produto.nome}</Text>
            </View>
            <View style={styles.itemDetails}>
              <TouchableOpacity onPress={() => diminuirQuantidade(index)} style={styles.qtyButtonRed}>
                <Text style={styles.qtyButtonTextDiminuir}>-</Text>
              </TouchableOpacity>
              <Text style={styles.itemQty}>{quantidades[index]}</Text>
              <TouchableOpacity onPress={() => aumentarQuantidade(index)} style={styles.qtyButtonGreen}>
                <Text style={styles.qtyButtonTextAumentar}>+</Text>
              </TouchableOpacity>
              <Text style={styles.itemPrice}>R$ {produto.preco.toFixed(2)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.total}>TOTAL</Text>
        <Text style={styles.totalAmount}>R$ {total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.finalizarButton}>
          <Text style={styles.finalizarButtonText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  header: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  mesa: {
    fontSize: 14,
    color: "#777",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
  body: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemText: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
  },
  itemName: {
    fontSize: 14,
    width: "80%",
  },
  itemImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 8,
  },
  itemDetails: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "40%",
  },
  itemQty: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  itemPrice: {
    position: "absolute",
    right: 0,
    fontSize: 14,
    color: "#555",
  },
  qtyButtonRed: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FF4C4C",
  },
  qtyButtonGreen: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  qtyButtonTextAumentar: {
    fontSize: 18,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  qtyButtonTextDiminuir: {
    fontSize: 18,
    color: "#FF4C4C",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  finalizarButton: {
    backgroundColor: "#5C3D16",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  finalizarButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ComponentCarrinhoCard;
