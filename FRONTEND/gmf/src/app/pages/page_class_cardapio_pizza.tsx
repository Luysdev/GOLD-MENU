import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios"; // Importando o Axios
import ComponenteNavLateral from "@/src/components/menu/class_componente_nav_lateral";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import ComponentCardProduto from "@/src/components/produtos/component_cardproduto";

export default function PageCardapioPizza() {
    // Estado para armazenar os produtos
    const [produtos, setProdutos] = useState<any[]>([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://localhost:3333/produto/get-all-produto-by-categoria', {
                    params: { produtoCategoria: 2 }  // Mudança para categoria de pizza (por exemplo, id=2)
                });
                setProdutos(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Erro ao buscar os produtos:", error);
            }
        };

        fetchProdutos();
    }, []); 

    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.nav}>
                <ComponenteNavSuperior selectedIconIndex={2} />
            </View>
            <View style={styles.navLateral}>
                <ComponenteNavLateral />
            </View>
            <ScrollView contentContainerStyle={styles.containerConteudo} showsVerticalScrollIndicator={false}>
                <Text style={styles.tituloFood}>Pizza</Text>
                
                {/* Container para os produtos */}
                <View style={styles.containerProdutos}>
                    {produtos.map((produto, index) => (
                        <View key={index} style={styles.produtoContainer}>
                            <ComponentCardProduto
                                produto={{
                                    produtocodigo: produto.produtocodigo,
                                    produtodescricao: produto.produtodescricao,
                                    produtoestoque: produto.produtoestoque,
                                    produtopreco: produto.produtopreco,
                                    imagem: produto.imagem || 'https://guiadacozinha.com.br/wp-content/uploads/2019/11/hamburguer-mexicano.jpg', // Substitua com a URL da imagem, se necessário
                                }}
                            />
                        </View>
                    ))}
                </View>
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
});
