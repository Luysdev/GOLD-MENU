import {Text, View, StyleSheet, TextInput, Pressable, Image} from "react-native"
import logoImage from "../../assets/logo-gold-premium.png"

export default function Login() {
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.containerLogin}>
                <Text style={styles.labelLogin}>LOGIN</Text>
                <View style={styles.containerInput}>
                    <Text style={styles.labelCPF}>CPF</Text>
                    <TextInput placeholder="Informe o seu CPF" style={styles.inputCPF}/>
                    <Text style={styles.labelSenha}>SENHA</Text>
                    <TextInput placeholder="Informe a sua senha" secureTextEntry={true} style={styles.inputSenha}/>
                    <Pressable style={styles.textButton} onPress={()=>{console.log("Erick")}}>Entrar</Pressable>
                </View>
            </View>
            <View style={styles.containerLogo}>
                <Image source={logoImage}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: "#614822",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },

    containerLogin: {
        width: 550,
        height: 650,
        backgroundColor: "#85714D",
        borderRadius: 29,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 100,
        marginRight: 110,
        marginTop: 170,
    },

    labelLogin: {
        fontSize: 50,
        color: "black",
        fontWeight: 600,
        marginBottom: 60,
    },

    containerInput: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    labelCPF: {
        fontSize: 35,
        color: "black",
        fontWeight: 500,
        marginBottom: 10,
        marginRight: 400,
    },

    inputCPF: {
        backgroundColor:"white",
        width: 463,
        height: 63,
        fontSize: 25,
        fontWeight: 600,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 30,
    },

    labelSenha: {
        fontSize: 35,
        color: "black",
        fontWeight: 500,
        marginBottom: 10,
        marginRight: 340,
    },
    
    inputSenha: {
        backgroundColor:"white",
        width: 463,
        height: 63,
        fontSize: 25,
        fontWeight: 600,
        borderRadius: 8,
        paddingLeft: 10,
    },

    textButton: {
        backgroundColor: "#282217",
        width: 237,
        height: 71,
        borderRadius: 6,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 35,
        marginTop: 80,
    },

    containerLogo: {
        backgroundColor: "#282217",
        width: 950,
        height: "100%",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});