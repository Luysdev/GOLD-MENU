import {View, Text, StyleSheet, TouchableOpacity} from  "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

export default  function componentNav () {
    return (
        <View style={styles.containerNavBarSuperior}>
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
        width: 540,
        height: 90,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        marginLeft: 830,
        padding: 10,
    },

    navBarItens: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        margin: 30,
    },

    navBarLabel: {
        color: "white",
        textAlign: "center",
        fontSize: 26,
        marginLeft: 11,
    },
});