import {View, Text, StyleSheet, TouchableOpacity} from  "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

export default  function componentNav () {
    return (
        <View style={styles.containerNavBarSuperior}>
            <TouchableOpacity style={styles.navBarItens}>
                <MaterialIcons name="menu" size={50} color="white" />
                <Text style={styles.navBarLabel}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <FontAwesome5 name="history" size={37} color="white" />
                <Text style={styles.navBarLabel}>Histórico de Pedidos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
            <FontAwesome6 name="bell-concierge" size={40} color="white" />
                <Text style={styles.navBarLabel}>Solicitar Garçom</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <AntDesign name="shoppingcart" size={40} color="white" />
                <Text style={styles.navBarLabel}>Carrinho</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerNavBarSuperior: {
        backgroundColor: "#85714D",
        width: 1070,
        height: 90,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        marginLeft: 300,
        padding: 10,
    },

    navBarItens: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        margin: 40,
    },

    navBarLabel: {
        color: "white",
        textAlign: "center",
        fontSize: 23,
        marginLeft: 13,
    },
});