import {View, Text, StyleSheet, TouchableOpacity, Image, Pressable} from  "react-native"
import FotoPizza from "../../assets/foto-pizza.png"
export default function () {
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.containerCardProduto}>
                <View style={styles.containerFotoProduto}>
                    <Image source={FotoPizza} style={styles.fotoProduto}/>
                </View>
                <Text style={styles.labelNomeProduto}>Calabresa com Catupiry</Text>
                <Text style={styles.labelDescricaoProduto}>Calabresa, mussarela e catupiry</Text>
                <Text style={styles.labelPrecoProduto}>R$ 45,90</Text>
                <Pressable style={styles.textButton}>Adicionar</Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: "#white",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },

    containerCardProduto: {
        width: 1000,
        height: 290,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 250,
        marginLeft: 230,
        borderRadius: 20,
    },

    containerFotoProduto: {
        display: "flex",
    },

    fotoProduto: {
        width: 310,
        height: 289,
        borderRadius: 20,
        marginRight: 690,
        marginTop: 218,
    },

    labelNomeProduto: {
        color: "black",
        fontSize: 45,
        fontWeight: 500,
        bottom: 280,
        marginLeft: 150,
    },

    labelDescricaoProduto: {
        color: "black",
        fontSize: 28,
        bottom: 255,
        marginLeft: 60,
    },

    labelPrecoProduto: {
        color: "black",
        fontSize: 45,
        fontWeight: 700,
        bottom: 200,
        marginRight: 130,
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
        bottom: 235,
        left: 350,
    },
});