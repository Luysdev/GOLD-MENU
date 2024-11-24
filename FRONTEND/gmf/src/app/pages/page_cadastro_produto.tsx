import {View, Text, StyleSheet, TextInput, Pressable} from "react-native"
import ComponentNavBarLateral from "@/src/components/menu/component_navbarlateral";
import ComponentNavBarSuperiorAdministrador from "@/src/components/menu/component_navbarsuperioraadministrador"

export default function CadastroProduto () {
    return (
        <View style={styles.containerPrincipal}>
            <ComponentNavBarLateral/>
            <View style={styles.containerCadastroProduto}> 
                <Text style={styles.labelCadastroProduto}>Cadastro de Produtos</Text>
                <View style={styles.containerInput}>
                    <Text style={styles.labelNome}>Nome do Produto</Text>
                    <TextInput placeholder="Informe o nome" style={styles.inputNome}/>
                    <Text style={styles.labelDescricao}>Descrição</Text>
                    <TextInput placeholder="Informe a descrição" style={styles.inputDescrição}/>
                    <Text style={styles.labelPreco}>Preço</Text>
                    <TextInput placeholder="Informe o preço" style={styles.inputPreco}/>
                    <Pressable style={styles.textButton}>Cadastrar</Pressable>
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

    containerCadastroProduto: {
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

    labelCadastroProduto: {
        color: "#282217",
        fontSize:55,
        fontWeight: '600',
        marginTop: 540,
        marginRight: 430,
        top: 100,
    },

    containerInput: {
        marginBottom: 750,
        paddingTop: 150,
    },

    labelNome: {
        color: "black",
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 15,
        left: 8,
    },

    inputNome: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        fontWeight: '400',
        width: 384,
        height: 63,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 50,
    },

    labelDescricao: {
        color: "black",
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 15,
        left: 8,
    },

    inputDescrição: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        fontWeight: '400',
        width: 950,
        height: 150,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 50,
        paddingBottom: 80,
    },

    labelPreco: {
        color: "black",
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 15,
        left: 8,
    },

    inputPreco: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        fontWeight: '400',
        width: 384,
        height: 63,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 50,
    },

    textButton: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 35,
        width: 250,
        height: 60,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 680, 
        bottom: 15,
    },
});