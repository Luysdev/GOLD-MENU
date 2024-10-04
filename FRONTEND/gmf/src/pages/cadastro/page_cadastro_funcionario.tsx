import {View, Text, StyleSheet, TextInput} from "react-native"
import ComponentNavBarLateral from "@/src/components/inicio/component_navbarlateral";
import ComponentNavBarSuperiorAdministrador from "@/src/components/inicio/component_navbarsuperioraadministrador"

export default function CadastroFuncionario () {
    return (
        <View style={styles.containerPrincipal}>
            <ComponentNavBarLateral/>
            <ComponentNavBarSuperiorAdministrador/>
            <View style={styles.containerCadastroFuncionario}>
                <Text style={styles.labelCadastroFuncionario}>Cadastro de Funcionário</Text>
                <View style={styles.containerInput}>
                    <Text style={styles.labelNome}>Nome do Funcionário</Text>
                    <TextInput placeholder="Informe o nome" style={styles.inputNome}/>
                    <Text style={styles.labelCpf}>CPF do Funcionário</Text>
                    <TextInput placeholder="Informe o CPF" style={styles.inputCpf}/>
                    <Text>Telefone do Funcionário</Text>
                    <TextInput placeholder="Informe o telefone"/>
                    <Text>Data de Nascimento</Text>
                    <TextInput placeholder="Informe a data"/>
                    <Text>Cargo</Text>
                    <TextInput placeholder="Informe o cargo"/>
                    <Text>Data de Início</Text>
                    <TextInput placeholder="Informe o data"/>
                </View>
            </View>
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

    containerCadastroFuncionario: {
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

    labelCadastroFuncionario: {
        color: "#282217",
        fontSize:55,
        fontWeight: 600,
        marginBottom: 830,
        marginRight: 360,
        position: "absolute",
    },

    containerInput: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    labelNome: {
        color: "black",
        fontSize: 35,
        fontWeight: 600,
        marginBottom: 23,
        marginRight: 528,
    },

    inputNome: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        fontWeight: 400,
        width: 384,
        height: 63,
        marginBottom: 150,
        marginRight: 500,
        borderRadius: 8,
        paddingLeft: 15,
    },

    labelCpf: {
        color: "black",
        fontSize: 35,
        fontWeight: 600,
        bottom: 80,
        marginRight: 550,
    },

    inputCpf: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        fontWeight: 400,
        width: 384,
        height: 63,
        marginBottom: 80,
        marginRight: 500,
        borderRadius: 8,
        paddingLeft: 15,
    },
});