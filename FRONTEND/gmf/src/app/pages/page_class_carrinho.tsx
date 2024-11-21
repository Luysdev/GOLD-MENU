import React from "react";
import ComponentCardCart from "@/src/components/cart/component_cardCart";
import ComponenteNavLateral from "@/src/components/menu/class_componente_nav_lateral";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import { View, StyleSheet, ScrollView, Text } from "react-native";

export default function PageGerenciarProduto() {
    // Lista de produtos com a imagem
    const produtos = [
        { nome: "Salada Gourmet", quantidade: 3, preco: 107.7, imagem: "https://via.placeholder.com/50" },
        { nome: "Sensação com Morango", quantidade: 1, preco: 30.9, imagem: "https://via.placeholder.com/50" },
        { nome: "Gin Tônico", quantidade: 1, preco: 24.9, imagem: "https://via.placeholder.com/50" },
    ];

    // Calculando o total
    const total = produtos.reduce((acc, produto) => acc + (produto.preco * produto.quantidade), 0);

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
                <ComponentCardCart 
                    numeroPedido="03" 
                    mesa="08" 
                    data="28/08/2024" 
                    produtos={produtos} 
                    total={total} 
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
        position: 'absolute',
        right: 0,
        backgroundColor: 'rgba(133, 113, 77, 1)',
        width: '70%',
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
