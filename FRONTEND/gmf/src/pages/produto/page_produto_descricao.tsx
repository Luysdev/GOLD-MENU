import {View, Text, StyleSheet, TextInput, Pressable} from "react-native"
import ComponentNavBarLateral from "@/src/components/inicio/component_navbarlateral";
import ComponentNavBarSuperiorCliente from "@/src/components/inicio/component_navbarsuperiorcliente"
import Feather from '@expo/vector-icons/Feather';

export default function SolicitarPedido () {
    return (
        <View style={styles.containerPrincipal}>
            <ComponentNavBarLateral/>
            <View style={styles.containerProdutoDescricao}>
                <View style={styles.containerInput}>
                    <Text style={styles.labelObservacoes}>Observações</Text>
                    <TextInput style={styles.inputObservacoes}/>
                    <Text style={styles.labelQuantidade}>Quantidade</Text>
                    <Feather name="minus-circle" size={85} color="red" style={styles.iconsQuantidadeRemover}/>
                    <Feather name="plus-circle" size={85} color="green" style={styles.iconsQuantidadeAdicionar}/>
                    <Pressable style={styles.textButton}>Adicionar no carrinho</Pressable>
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

    containerProdutoDescricao: {
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

    containerInput: {
        marginBottom: 290,
        paddingTop: 250,
    },

    labelObservacoes: {
        color: "black",
        fontSize: 45,
        fontWeight: 600,
        marginBottom: 15,
        left: 8,
    },

    inputObservacoes: {
        backgroundColor: "#D9D9D9",
        color: "black",
        fontSize: 25,
        fontWeight: 400,
        width: 950,
        height: 190,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 50,
        paddingBottom: 80,
    },

    labelQuantidade: {
        color: "black",
        fontSize: 45,
        fontWeight: 600,
        marginBottom: 15,
        left: 8,
    },

    iconsQuantidadeRemover: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 60,
        right: 120,
    },

    iconsQuantidadeAdicionar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 33,
        left: 130,
    },

    textButton: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 35,
        width: 351,
        height: 73,
        borderRadius: 36,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 310,
        top: 38,
    },
});