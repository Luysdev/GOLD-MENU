import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import ComponentCardProduto from "@/src/components/produtos/component_cardproduto";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PageCardapioBebidas() {
    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.nav}>
                <ComponenteNavSuperior selectedIconIndex={3} />
            </View>
            <ScrollView contentContainerStyle={styles.containerConteudo}>
                <Text style={styles.tituloFood}>TEXTOP</Text>
                <ComponentCardProduto/>
                <ComponentCardProduto/>
                <ComponentCardProduto/>
                <ComponentCardProduto/>
                <ComponentCardProduto/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: "#E8E1D4",
        flexDirection: "row", 
    },
    containerConteudo: {
        flexGrow: 1, 
        padding: 20, 
    },
    texto: {
        fontSize: 24,
        color: 'black',
        marginTop: 20,
    },
    nav: {
        width: "18%",
        height: "100%",
    },
    tituloFood: {
        fontSize: 40, 
        fontWeight: 'bold',
        alignSelf: "flex-start", 
        color: 'black',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3, 
        marginTop: 20,
        marginBottom: 20,
    }
    
});