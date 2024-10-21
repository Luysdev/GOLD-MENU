import {View, Text, StyleSheet} from "react-native"
import ComponentNavBarLateral from "@/src/components/inicio/component_navbarlateral";
import ComponentNavBarSuperiorAdministrador from "@/src/components/inicio/component_navbarsuperioraadministrador"
import Fontisto from '@expo/vector-icons/Fontisto';

export default function HistoricoPedidoVazio () {
    return (
        <View style={styles.containerPrincipal}>
            <ComponentNavBarLateral/>
            <View style={styles.containerPedidos}>
                <Text style={styles.labelHistoricoPedidos}>Histórico de Pedidos</Text>
                <View style={styles.containerAviso}>
                    <Fontisto name="history" size={120} color="black" style={styles.iconHistory}/>
                    <Text style={styles.labelTexto}>Não foi encontrado nenhum pedido no seu histórico</Text>
                </View>
            </View>  
                <ComponentNavBarSuperiorAdministrador/>
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

    containerPedidos: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    labelHistoricoPedidos: {
        color: "#282217",
        fontSize:55,
        fontWeight: 600,
        bottom: 250,
        right: 120,  
    },

    containerAviso: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    labelTexto: {
        color: "black",
        fontSize: 30,
        fontWeight: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 40,
        left: 100,
    },

    iconHistory: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 100,
    },
});