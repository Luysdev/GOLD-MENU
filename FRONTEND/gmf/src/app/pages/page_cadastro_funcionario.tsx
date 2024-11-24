import {View, Text, StyleSheet, TextInput, Pressable} from "react-native"
import ComponentNavBarLateral from "@/src/components/menu/component_navbarlateral";
import ComponentNavBarSuperiorAdministrador from "@/src/components/menu/component_navbarsuperioraadministrador"

export default function CadastroFuncionario () {
    return (
        <View style={styles.containerPrincipal}>
            <ComponentNavBarLateral/>
            <View style={styles.containerCadastroFuncionario}>
                <Text style={styles.labelCadastroFuncionario}>Cadastro de Funcionário</Text>
                <View style={styles.containerInput}>
                    <View style={styles.containerInputEsquerda}>
                            <Text style={styles.labelNome}>Nome do Funcionário</Text>
                            <TextInput placeholder="Informe o nome" style={styles.inputNome}/>
                            <Text style={styles.labelCpf}>CPF do Funcionário</Text>
                            <TextInput placeholder="Informe o CPF" style={styles.inputCpf}/>
                            <Text style={styles.labelTelefone}>Telefone do Funcionário</Text>
                            <TextInput placeholder="Informe o telefone" style={styles.inputTelefone}/>
                    </View>
                    <Pressable style={styles.textButton}>Cadastrar</Pressable>
                    <View style={styles.containerInputDireita}>
                        <Text style={styles.labelDataNascimento}>Data de Nascimento</Text>
                        <TextInput placeholder="Informe a data" style={styles.inputDataNascimento}/>
                        <Text style={styles.labelCargo}>Cargo</Text>
                        <TextInput placeholder="Informe o cargo" style={styles.inputCargo}/>
                        <Text style={styles.labelDataInicio}>Data de Início</Text>
                        <TextInput placeholder="Informe o data" style={styles.inputDataInicio}/>
                    </View>
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

    containerInput: {
        flexDirection: "row",
        marginBottom: 430,
        paddingTop: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    labelCadastroFuncionario: {
        color: "#282217",
        fontSize:55,
        fontWeight: '600',
        marginTop: 350,
        marginRight: 360,
    },

    containerInputEsquerda: {
        flex: 1,
        marginRight: 70,
        bottom: 80,
        left: 110,
    },

    labelNome: {
        color: "black",
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 15,
    },

    inputNome: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        fontWeight: '400',
        width: 384,
        height: 63,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 70,
    },

    labelCpf: {
        color: "black",
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 15,
    },

    inputCpf: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        fontWeight: '400',
        width: 384,
        height: 63,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 70,
    },

    labelTelefone: {
        color: "black",
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 15,
    },

    inputTelefone: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        width: 384,
        height :63,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 70,
    },

    containerInputDireita: {
        flex: 1,
        marginLeft: 70,
        bottom: 80,
        right: 110,
    },

    labelDataNascimento: {
        color: "black",
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 15,
    },

    inputDataNascimento: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        width: 384,
        height :63,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 70,
    },

    labelCargo: {
        color: "black",
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 15,
    },

    inputCargo: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        width: 384,
        height :63,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 70,
    },

    labelDataInicio: {
        color: "black",
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 15,
    },

    inputDataInicio: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 25,
        width: 384,
        height :63,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 70,
    },

    textButton: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 35,
        width: 234,
        height: 60,
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 450,
    },
});