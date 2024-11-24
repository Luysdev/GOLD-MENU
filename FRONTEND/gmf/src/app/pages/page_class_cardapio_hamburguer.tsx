import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import axios from "axios"; // Importando o Axios
import ComponenteNavLateral from "@/src/components/menu/class_componente_nav_lateral";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import ComponentCardProduto from "@/src/components/produtos/component_cardproduto";

export default function PageCardapioHamburguer() {
    // Estado para armazenar os produtos, loading, erro e carrinho
    const [produtos, setProdutos] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [carrinhoId, setCarrinhoId] = useState<number | null>(null); // Para armazenar o carrinhoId

    useEffect(() => {
        const fetchProdutos = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:3333/produto/get-all-produto-by-categoria', {
                    params: { produtoCategoria: 1 }
                });
                setProdutos(response.data);
                setError(null); // Limpa qualquer erro anterior
            } catch (error) {
                setError("Erro ao buscar os produtos");
                console.error("Erro ao buscar os produtos:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProdutos();
    }, []);

    // Função para adicionar o produto ao carrinho
    const handleAdd = async (produto: any) => {
        if (1) {
            try {
                const response = await axios.post(`http://localhost:3333/carrinho/1/produto`, {
                    produtocodigo: produto.produtocodigo,
                    quantidade: 1, // Adicionando 1 unidade do produto
                });
                console.log(response.data.message); // Mensagem de sucesso
            } catch (error) {
                console.error("Erro ao adicionar produto ao carrinho:", error);
            }
        } else {
            console.error("Carrinho não encontrado");
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
                <Text style={styles.tituloFood}>Hamburguer</Text>

                {/* Verificando o status de loading ou erro */}
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : error ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : (
                    <View style={styles.containerProdutos}>
                        {produtos.map((produto, index) => (
                            <View key={index} style={styles.produtoContainer}>
                                <ComponentCardProduto
                                    produto={{
                                        produtocodigo: produto.produtocodigo,
                                        produtodescricao: produto.produtodescricao,
                                        produtoestoque: produto.produtoestoque,
                                        produtopreco: produto.produtopreco,
                                        imagem: produto.imagem || 'https://guiadacozinha.com.br/wp-content/uploads/2019/11/hamburguer-mexicano.jpg', // Usando a imagem da API ou a URL padrão
                                    }}
                                    onDelete={() => {}}
                                    showAdd={true} // Habilita o botão de adicionar
                                    onAdd={() => handleAdd(produto)} // Chama a função handleAdd
                                />
                            </View>
                        ))}
                    </View>
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
    containerConteudo: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 50,
    },
    texto: {
        fontSize: 24,
        color: 'black',
    },
    nav: {
        width: "18%",
        height: "100%",
    },
    tituloFood: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: "flex-start",
        color: 'black',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
        marginTop: 20,
        marginBottom: 20,
    },
    navLateral: {
        position: 'absolute',
        right: 0,
        backgroundColor: 'rgba(133, 113, 77, 1)',
        width: '70%',
        zIndex: 1,
    },
    containerProdutos: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10, // Espaço entre os produtos
    },
    produtoContainer: {
        width: '100%', // Controla a largura do card, ajustável conforme necessário
        marginBottom: 15, // Espaço entre as linhas de produtos
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
    },
});
