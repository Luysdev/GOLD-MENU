import { View, StyleSheet, Text, Image } from "react-native";
import FotoHamburguer from "../../assets/hb.png";

export default function ComponentCardProdutoSmall() { 
    return (
        <View style = {styles.containerPrincipal}>
            {/* <Image 
                        source={FotoHamburguer} 
                        style={styles.styleImage}  
                        resizeMode="cover" 
            /> */}
            <Text style= {styles.textTitulop}>HAMBURGER</Text>
            <Text style= {styles.textPrice}>R$10,90</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    containerPrincipal: {
        backgroundColor : "white",
        height: "35%",
        width: "25%",
        borderRadius: 20,
        margin:20,
        display: "flex",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    styleImage: {
        height: "60%",
        width: "100%",
        borderRadius: 20,
    },

    textTitulop: {
        fontSize: 30, 
        fontWeight: 'bold', 
    },
    
    textPrice: {
        fontSize: 46, 
        fontWeight: 'bold', 
    },
});