import {View, Text, StyleSheet, TouchableOpacity} from  "react-native"
import { useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

export default  function componentNav () {

    const router = useRouter();

    const [showSubNavBar, setShowSubNavBar] = useState(false);

    return (
        <View style={styles.containerNavBarSuperior}>
            <TouchableOpacity style={styles.navBarItens} onPress={() => setShowSubNavBar(!showSubNavBar)}>
                <MaterialIcons name="menu" size={50} color="white"/>
                <Text style={styles.navBarLabel}>Menu</Text>
            </TouchableOpacity>
            {showSubNavBar && (
            <View style={styles.containerSubNavBarMenu}>
                <TouchableOpacity style={styles.subNavbarItens} onPress={() => router.push('./page_cadastro_produto')}>
                    <Text style={styles.subNavBarLabel}>Cadastro de Produtos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subNavbarItens} onPress={() => router.push('./page_cadastro_funcionario')}>
                    <Text style={styles.subNavBarLabel}>Cadastro de Usuário</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subNavbarItens}>
                    <Text style={styles.subNavBarLabel}>Gerenciar Produtos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subNavbarItens}>
                    <Text style={styles.subNavBarLabel}>Gerenciar Usuários</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subNavbarItens}>
                    <Text style={styles.subNavBarLabel}>Emissão de Relatórios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subNavbarItens}>
                    <Text style={styles.subNavBarLabel}>Pagamentos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subNavbarItens} onPress={() => router.push('./page_login')}>
                    <Text style={styles.subNavBarLabel}>Sair</Text>
                </TouchableOpacity>
            </View>
            )}
            <TouchableOpacity style={styles.navBarItens}>
                <FontAwesome5 name="history" size={37} color="white" />
                <Text style={styles.navBarLabel}>Histórico de Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
            <FontAwesome6 name="bell-concierge" size={40} color="white" />
                <Text style={styles.navBarLabel}>Solicitar Garçom</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <AntDesign name="shoppingcart" size={40} color="white" />
                <Text style={styles.navBarLabel}>Carrinho</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerNavBarSuperior: {
        backgroundColor: "#85714D",
        width: "70%", // Define a largura do container
        height: 90,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        top: 0, // Fixa no topo da tela
        right: 0, // Alinha o container à direita
        padding: 10,
        zIndex: 1, // Garante que fique acima de outros elementos
    },

    navBarItens: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 15, // Reduz o espaçamento horizontal entre os itens
    },

    navBarLabel: {
        color: "white",
        textAlign: "center",
        fontSize: 23,
        marginLeft: 10, // Reduz a margem entre o ícone e o texto
    },

    containerSubNavBarMenu: {
        backgroundColor: "#85714D",
        width: 245,
        height: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 85, // Ajusta a posição para que fique abaixo da barra superior
        left: 0,
        zIndex: 1, // Garante que o menu lateral fique acima dos outros elementos
    },

    subNavbarItens: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },

    subNavBarLabel: {
        color: "white",
        fontSize: 21,
    },
});
