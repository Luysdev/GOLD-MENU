import ComponenteNavLateral from "@/src/components/menu/class_componente_nav_lateral";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import { View, StyleSheet, ScrollView, Text } from "react-native";

export default function PagePagamento() {
    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.nav}>
                <ComponenteNavSuperior selectedIconIndex={1} />
            </View>
            <View style={styles.navLateral}>
                <ComponenteNavLateral/>
            </View>
            <ScrollView contentContainerStyle={styles.containerConteudo} showsVerticalScrollIndicator={false}>
                <Text>Pagamento</Text>
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
    nav: {
        width: "18%",
        height: "100%",
    },
    navLateral: {
        position: 'absolute',
        right: 0,
        backgroundColor: 'rgba(133, 113, 77, 1)',
        width: '70%',
        zIndex: 1,
    },
    containerConteudo: {
        flexGrow: 1, 
        padding: 20,
        paddingTop:100, 
    },
});