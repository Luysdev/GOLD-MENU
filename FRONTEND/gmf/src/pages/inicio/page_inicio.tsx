import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

export default function Inicio () {
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.containerNavBarLateral}>
                <TouchableOpacity style={styles.navBarItens}>
                    <Text style={styles.navBarLabel}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navBarItens}>
                    <Text style={styles.navBarLabel}>Hambúrguer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navBarItens}>
                    <Text style={styles.navBarLabel}>Pizzas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navBarItens}>
                    <Text style={styles.navBarLabel}>Bebidas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navBarItens}>
                    <Text style={styles.navBarLabel}>Drinks</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: "white",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },

    containerNavBarLateral: {
        backgroundColor: "#282217",
        width: 240,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 1130,
    },

    navBarItens: {
        padding: 90,
    },

    navBarLabel: {
        color: "white",
        textAlign: "center",
        fontSize: 22,
        fontWeight: 600,
    },
});