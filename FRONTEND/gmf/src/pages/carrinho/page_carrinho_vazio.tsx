import {View, Text, StyleSheet} from "react-native"
import ComponentNavBarLateral from "@/src/components/inicio/component_navbarlateral";
import ComponentNavBarSuperiorCliente from "@/src/components/inicio/component_navbarsuperiorcliente"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function CarrinhoVazio () {
    return(
        <View style={styles.containerPrincipal}>
            <ComponentNavBarLateral/>
            <View style={styles.containerCarrinho}>
                <Text style={styles.labelCarrinho}>Carrinho</Text>
                    <View style={styles.containerAviso}>
                        <MaterialCommunityIcons name="cart-remove" size={150} color="black" style={styles.iconCart}/>
                        <Text style={styles.labelText1}>O carrinho está vazio!</Text>
                        <Text style={styles.labelText1}>Selecione pelo menos um item para finalizar o pedido</Text>
                    </View>
            </View>
            <ComponentNavBarSuperiorCliente/>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: "#E8E1D4",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },

    containerCarrinho: {
        width: 1000,
        height: 720,
        backgroundColor: "white",
        marginTop: 250,
        marginLeft: 240,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    labelCarrinho: {
        color: "#282217",
        fontSize:55,
        fontWeight: 600,
        marginRight: 760,  
        bottom: 260,
    },

    containerAviso: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 70,
    },

    labelText1: {
        color: "black",
        fontSize: 30,
        fontWeight: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    iconCart: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});