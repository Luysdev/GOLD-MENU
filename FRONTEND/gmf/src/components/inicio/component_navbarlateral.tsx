import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function ComponentNav() {
    return (
        <View style={styles.containerNavBarLateral}>
            <TouchableOpacity style={styles.navBarItens}>
                <MaterialCommunityIcons name="home-outline" size={80} color="white"/>
                <Text style={styles.navBarLabel}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <FontAwesome5 name="hamburger" size={60} color="white"/>
                <Text style={styles.navBarLabel}>Hambúrguer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <Ionicons name="pizza-outline" size={60} color="white"/>
                <Text style={styles.navBarLabel}>Pizzas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <Ionicons name="beer" size={60} color="white"/>
                <Text style={styles.navBarLabel}>Bebidas</Text>           
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <Entypo name="drink" size={60} color="white"/>
                <Text style={styles.navBarLabel}>Drinks</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    containerNavBarLateral: {
        backgroundColor: "#282217",
        width: 240,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 1130,
    },

    containerLogo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        width: 120,
        height:120,
    },

    navBarItens: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 90,
    },

    navBarLabel: {
        color: "white",
        textAlign: "center",
        fontSize: 22,
        fontWeight: 600,
    },
});

