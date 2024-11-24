import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";

// Definindo a interface para o produto
interface Produto {
  produtocodigo: number;
  produtodescricao: string;
  produtoestoque: number;
  produtopreco: string;
  imagem: any; // Modificado para aceitar imagens locais (require)
}

interface ComponentCardProdutoProps {
  produto: Produto; // Usando a interface Produto para tipar as props
  showDelete?: boolean;
  showAdd?: boolean;
  onDelete: (codigo: number) => void;
  onAdd: (produto: Produto) => void; // Função para adicionar o produto ao carrinho
}

const { width, height } = Dimensions.get("window");

const ComponentCardProduto: React.FC<ComponentCardProdutoProps> = ({
  showDelete = false,
  showAdd = true,
  produto,
  onDelete,
  onAdd,
}) => {
  const handleDelete = () => {
    if (onDelete) {
      console.log("Deletar produto:", produto.produtocodigo);
      onDelete(produto.produtocodigo);
    }
  };

  const handleAdd = () => {
    if (onAdd) {
      console.log("Item adicionado:", produto.produtocodigo);
      onAdd(produto); 
    }
  };

  return (
    <View style={styles.containerPrincipal}>
      {showDelete && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
      )}
      {/* Suporte para imagens locais ou remotas */}
      <Image source={produto.imagem} style={styles.styleImage} resizeMode="cover" />
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{produto.produtodescricao}</Text>
        <Text style={styles.description}>Estoque: {produto.produtoestoque}</Text>
        <Text style={styles.value}>R$ {produto.produtopreco}</Text>
      </View>
      {/* Botão Adicionar no canto inferior direito */}
      {showAdd && (
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: {
    backgroundColor: "white",
    width: "100%",
    height: height * 0.25,
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
  },
  deleteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  deleteButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  styleImage: {
    width: "35%",
    height: "100%",
    borderRadius: 15,
  },
  containerInfo: {
    width: "65%",
    height: "100%",
    padding: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    fontWeight: "300",
    color: "gray",
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#282217",
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(40, 34, 23, 1)",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    zIndex: 5,
  },
  addButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ComponentCardProduto;
