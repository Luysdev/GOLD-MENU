import {View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import logoImage from "../../assets/logo-gold-premium-branco.png"
import { Link } from "expo-router";

export default function ComponentNav() {   
    return (
        <View style={styles.containerNavBarLateral}>
            <View style={styles.containerLogo}>
                <Image source={logoImage} style={styles.logo}/>
            </View>
            <TouchableOpacity style={styles.navBarItens}>
                <Link href={"../pages/page_inicio"}></Link>
                <MaterialCommunityIcons name="home-outline" size={90} color="white"/>
                <Text style={styles.navBarLabel}>Início</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <FontAwesome5 name="hamburger" size={70} color="white"/>
                <Text style={styles.navBarLabel}>Hambúrguer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <Ionicons name="pizza-outline" size={70} color="white"/>
                <Text style={styles.navBarLabel}>Pizzas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <Ionicons name="beer" size={70} color="white"/>
                <Text style={styles.navBarLabel}>Bebidas</Text>           
            </TouchableOpacity>
            <TouchableOpacity style={styles.navBarItens}>
                <Entypo name="drink" size={70} color="white"/>
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
        position: "absolute"
    },

    containerLogo: {
        flex: 1,
        padding: 20,
    },

    logo: {
        width: 150,
        height: 150,
    },

    navBarItens: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginBottom: 20,
    },

    navBarLabel: {
        color: "white",
        textAlign: "center",
        fontSize: 22,
        fontWeight: 600,
    },
});

