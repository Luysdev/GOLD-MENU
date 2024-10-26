import {View, Text, StyleSheet, Pressable} from  "react-native"

export default function produtoCadastrado() {
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.containerMensagem}>
                <View style={styles.containerConteudoMensagem}>
                    <Text style={styles.labelMensagem}>Produto removido com sucesso!</Text>
                </View>
                <Pressable style={styles.textButton}>OK</Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    containerMensagem: {
        width: 603,
        height: 319,
        backgroundColor: "#85714D",
        borderRadius: 13,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 350,
        marginLeft: 200,
    },

    containerConteudoMensagem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    labelMensagem: {
        color: "white",
        fontSize: 30,
        fontWeight: 600,
        marginTop: 80,

    },

    textButton: {
        backgroundColor: "#282217",
        color: "white",
        borderRadius: 6,
        fontSize: 30,
        width: 194,
        height: 66,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 90,
    },
});