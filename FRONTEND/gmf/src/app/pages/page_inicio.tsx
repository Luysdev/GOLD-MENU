import { View, StyleSheet, Text, Image } from "react-native";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import ComponentCardProdutoSmall from "@/src/components/produtos/component_cardProdutoSmall";

const FotoHamburguer = require("../../assets/hb.png");
const Logo = require("../../assets/logo-white.png");

export default function Inicio() {
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.nav}>
                <ComponenteNavSuperior selectedIconIndex={0} />
            </View>
            <View style={styles.containerConteudo}>
                <View style={styles.containerBannerPrincipal}>
                <Image 
                    source={require("../../assets/hb.png")} 
                    style={styles.styleImage}  
                    resizeMode="cover" 
                />
                <Image 
                    source={require("../../assets/logo-white.png")} 
                    style={styles.logoImage}  
                />
                </View>
                <Text style={styles.tituloPromocao}>PROMOÇÕES DO DIA</Text>
                <View style={styles.containerPromo}>   
                    <ComponentCardProdutoSmall />
                    <ComponentCardProdutoSmall />
                    <ComponentCardProdutoSmall />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        flexDirection: "row", 
        backgroundColor: "#E8E1D4",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    containerConteudo: {
        flex: 1, 
    },
    texto: {
        fontSize: 24,
        color: 'black',
    },
    containerBannerPrincipal: {
        width: "100%",
        height: "40%",
        overflow: 'hidden',
        position: 'relative', 
    },
    styleImage: {
        width: "100%",
        height: "100%", 
    },
    logoImage: {
        position: 'absolute', 
        top: '30%', 
        left: '46%', 
        transform: [{ translateX: -50 }, { translateY: -50 }], 
        width: "20%", 
        height: "65%", 
        aspectRatio: 1, 
    },
    containerPromo: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        margin: 10,
        justifyContent: "center",
    },
    tituloPromocao: {
        fontSize: 40, 
        fontWeight: 'bold',
        alignSelf: "center", 
        color: 'black',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3, 
        marginTop: 20,
    },
    nav: {
        width: "18%",
        height: "100%",
    },
});
