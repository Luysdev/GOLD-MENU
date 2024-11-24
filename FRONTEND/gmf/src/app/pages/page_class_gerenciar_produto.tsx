import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Modal, TextInput, Button } from "react-native";
import axios from "axios";
import ComponenteNavLateral from "@/src/components/menu/class_componente_nav_lateral";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import ComponentCardProduto from "@/src/components/produtos/component_cardproduto";

export default function PageGerenciarProduto() {
    const [produtos, setProdutos] = useState<any[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [nomeProduto, setNomeProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState("");
    const [estoqueProduto, setEstoqueProduto] = useState("");
    const [categoriaProduto, setCategoriaProduto] = useState("");

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://localhost:3333/produto/get-all-produto');
                setProdutos(response.data);
            } catch (error) {
                console.error("Erro ao buscar os produtos:", error);
            }
        };

        fetchProdutos();
    }, []);

    const handleOpenModal = () => {
        setIsModalVisible(true);
        setNomeProduto("");
        setDescricaoProduto("");
        setPrecoProduto("");
        setEstoqueProduto("");
        setCategoriaProduto("");
    };

    const handleCloseModal = () => setIsModalVisible(false);

    const handleAddProduto = async () => {
        try {
            await axios.post('http://localhost:3333/produto/add-produto', {
                produtocodigo: Math.floor(Math.random() * 100) + 1, 
                produtodescricao: descricaoProduto,
                produtopreco: parseFloat(precoProduto),
                produtoestoque: parseInt(estoqueProduto, 10),
                produtocategoria: parseInt(categoriaProduto, 10),
            });

            fetchProdutos();  
            handleCloseModal();
        } catch (error) {
            console.error("Erro ao adicionar o produto:", error);
        }
    };

    const handleDeleteProduto = async (produtocodigo: number) => {
        try {
            await axios.delete(`http://localhost:3333/produto/delete-produto/${produtocodigo}`);
            fetchProdutos(); 
        } catch (error) {
            console.error("Erro ao excluir o produto:", error);
        }
    };

    const fetchProdutos = async () => {
        try {
            const response = await axios.get('http://localhost:3333/produto/get-all-produto');
            setProdutos(response.data);
        } catch (error) {
            console.error("Erro ao buscar os produtos:", error);
        }
    };

    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.nav}>
                <ComponenteNavSuperior selectedIconIndex={1} />
            </View>
            <View style={styles.navLateral}>
                <ComponenteNavLateral />
            </View>
            <ScrollView contentContainerStyle={styles.containerConteudo} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.tituloFood}>Gerenciar Produtos</Text>
                    <TouchableOpacity style={styles.addButton} onPress={handleOpenModal}>
                        <Text style={styles.addButtonText}>+ Novo Produto</Text>
                    </TouchableOpacity>
                </View>

                {produtos.map((produto, index) => (
                    <ComponentCardProduto
                        key={index}
                        produto={{
                            produtocodigo: produto.produtocodigo,
                            produtodescricao: produto.produtodescricao,
                            produtoestoque: produto.produtoestoque,
                            produtopreco: produto.produtopreco,
                            imagem: produto.imagem || 'https://guiadacozinha.com.br/wp-content/uploads/2019/11/hamburguer-mexicano.jpg',
                        }}
                        showDelete={true}
                        showAdd={false}
                        onDelete={handleDeleteProduto} // Passa a função de deletar
                        onAdd={() => {}}
                    />
                ))}

                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={handleCloseModal}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Adicionar Produto</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nome do Produto"
                                value={nomeProduto}
                                onChangeText={setNomeProduto}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Descrição"
                                value={descricaoProduto}
                                onChangeText={setDescricaoProduto}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Preço"
                                keyboardType="numeric"
                                value={precoProduto}
                                onChangeText={setPrecoProduto}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Estoque"
                                keyboardType="numeric"
                                value={estoqueProduto}
                                onChangeText={setEstoqueProduto}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Categoria"
                                keyboardType="numeric"
                                value={categoriaProduto}
                                onChangeText={setCategoriaProduto}
                            />
                            <View style={styles.modalButtons}>
                                <Button title="Cancelar" onPress={handleCloseModal} color="#FF5252" />
                                <Button title="Salvar" onPress={handleAddProduto} />
                            </View>
                        </View>
                    </View>
                </Modal>
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
        paddingTop: 70,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 20,
    },
    tituloFood: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    },
    addButton: {
        backgroundColor: "#6A9955",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
