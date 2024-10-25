import {View, Text, StyleSheet, TouchableOpacity, Image, Pressable} from  "react-native"

export default function componentCardFuncionario() {
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.containerCardFuncionario}>
                <View style={styles.containerDados}>
                    <View style={styles.containerDadosEsquerda}>
                        <Text style={styles.labelNome}><Text style={styles.labelNomeBold}>Nome:</Text> Erick Augusto Warmling</Text>
                        <Text style={styles.labelCpf}><Text style={styles.labelNomeBold}>CPF:</Text> 333.333.333-33</Text>
                        <Text style={styles.labelTelefone}><Text style={styles.labelNomeBold}>Telefone:</Text> (49) 99999-9999</Text>
                        <Text style={styles.labelCargo}><Text style={styles.labelNomeBold}>Cargo:</Text> Caixa</Text>
                    </View>
                    <View style={styles.containerDadosDireita}>
                        <Text style={styles.labelTextDataNascimento}>Data de Nascimento</Text>
                        <Text style={styles.labelDataNascimento}>03/03/2005</Text>
                        <Text style={styles.labelTextDataInicio}>Data de Início</Text>
                        <Text style={styles.labelDataInicio}>01/10/2023</Text>
                        <View style={styles.containerButton}>
                            <Pressable style={styles.textButtonEditar}>Editar Informações</Pressable>
                            <Pressable style={styles.textButtonRemover}>Remover Funcionário</Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
    },

    containerCardFuncionario: {
        width: 1050,
        height: 380,
        backgroundColor: "white",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 245,
        marginBottom: 100,
    },

    containerDados: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    containerDadosEsquerda: {
        marginTop: 40,
        marginLeft: 30,
    },

    labelNome: {
        color: "black",
        fontSize: 35,
    },

    labelNomeBold: {
        fontWeight: 600,
    },

    labelCpf: {
        color: "black",
        fontSize: 35,
        paddingTop: 35,
    },

    labelTelefone: {
        color: "black",
        fontSize: 35,
        paddingTop: 35,
    },

    labelCargo: {
        color: "black",
        fontSize: 35,
        paddingTop: 35,
    },

    containerDadosDireita: {
        marginLeft: 90,
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
    },

    labelTextDataNascimento: {
        color: "black",
        fontSize: 35,
        fontWeight: 600,
        paddingTop: 35,
    },

    labelDataNascimento: {
        color: "black",
        fontSize: 35,
        paddingTop: 10,
    },

    labelTextDataInicio: {
        color: "black",
        fontSize: 35,
        fontWeight: 600,
        paddingTop: 35,
    },

    labelDataInicio: {
        color: "black",
        fontSize: 35,
        paddingTop: 10,
    },
    
    containerButton: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textButtonEditar: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 23,
        borderRadius: 30,
        width: 226,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginHorizontal: -60,
    },

    textButtonRemover: {
        backgroundColor: "#CA0000",
        color: "white",
        fontSize: 23,
        borderRadius: 30,
        width: 226,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginHorizontal: 80,
    },
});