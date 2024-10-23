import {View, Text, StyleSheet, TouchableOpacity, Image, Pressable} from  "react-native"
import FotoPizza from "../../assets/foto-pizza.png"
export default function () {
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.containerCardProduto}>
                <Image source={FotoPizza} style={styles.fotoProduto}/>
                <View style={styles.containerDadosProduto}>
                    <Text style={styles.labelNomeProduto}>Calabresa com Catupiry</Text>
                    <Text style={styles.labelDescricaoProduto}>Calabresa, mussarela e catupiry</Text>
                    <Text style={styles.labelPrecoProduto}>R$ 45,90</Text>
                </View>
                <Pressable style={styles.textButton}>Adicionar</Pressable>
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

    containerCardProduto: {
        width: 1000,
        height: 290,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 250,
        marginLeft: 250,
        borderRadius: 20,
    },

    fotoProduto: {
        width: 310,
        height: 289,
        borderRadius: 20,
    },

    containerDadosProduto: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginRight: -46,
        marginLeft: 15,
    },

    labelNomeProduto: {
        color: "black",
        fontSize: 45,
        fontWeight: 500,
        marginBottom: 200,
    },

    labelDescricaoProduto: {
        justifyContent:"space-between",
        color: "black",
        fontSize: 27,
        marginTop: -180,
    },

    labelPrecoProduto: {
        color: "black",
        fontSize: 45,
        fontWeight: 700,
        marginTop: 70,
    },

    textButton: {
        backgroundColor: "#282217",
        color: "white",
        fontSize: 35,
        width: 210,
        height: 60,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 190,
        marginRight: 80,
    },
});