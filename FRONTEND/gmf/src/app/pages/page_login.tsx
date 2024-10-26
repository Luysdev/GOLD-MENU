import {Text, View, StyleSheet, TextInput, Pressable, Image} from "react-native"
import logoImage from "../../assets/logo-gold-premium.png"
import axios from 'axios';
import { useState } from "react";
import { useRouter } from 'expo-router';

export default function Login() {
    const router  = useRouter();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError(''); // Resetar erro
        try {
            const response = await axios.post('http://localhost:3333/funcionario/verificar-funcionario', {
                cpf: cpf,
            });

            if (response.data && response.data.funcpassword) {
                // Comparar a senha informada com a senha retornada
                if (response.data.funcpassword === senha) {
                    // Login bem-sucedido
                    console.log("Login bem-sucedido!", response.data);
                    router.push('/pages/page_inicio');
                } else {
                    setError('Senha incorreta.');
                }
            } else {
                setError('Funcionário não encontrado.');
            }
        } catch (err) {
            console.error('Erro ao fazer login:', err);
            setError('Erro ao fazer login. Tente novamente.');
        }
    };

    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.containerLogin}>
                <Text style={styles.labelLogin}>LOGIN</Text>
                <View style={styles.containerInput}>
                    <Text style={styles.labelCPF}>CPF</Text>
                    <TextInput
                        placeholder="Informe o seu CPF"
                        style={styles.inputCPF}
                        value={cpf}
                        onChangeText={setCpf}
                        maxLength = {11}
                    />
                    <Text style={styles.labelSenha}>SENHA</Text>
                    <TextInput
                        placeholder="Informe a sua senha"
                        secureTextEntry={true}
                        style={styles.inputSenha}
                        value={senha}
                        onChangeText={setSenha}
                    />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    <Pressable style={styles.textButton} onPress={handleLogin}>
                        <Text style={{ color: "white", fontSize: 35 }}>Entrar</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.containerLogo}>
                <Image source={logoImage} />
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

    errorText: {
        color: "red",
        fontSize: 20,
        marginTop: 10,
    },

});