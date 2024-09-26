import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
import ComponentNavBarLateral from "@/src/components/inicio/component_navbarlateral";
import ComponentNav from "@/src/components/inicio/component_navbarlateral";
import ComponentNavBarSuperiorCliente from "@/src/components/inicio/component_navbarsuperiorcliente"
import ComponentNavBarSuperiorFuncionario from "@/src/components/inicio/component_navbarsuperiorafuncionario"

export default function Inicio () {
    return (
        <View style={styles.containerPrincipal}>
            <ComponentNavBarLateral/>
            <ComponentNavBarSuperiorFuncionario/>
        </View>
    );
}

const styles = StyleSheet.create ({
    containerPrincipal: {
        backgroundColor: "white",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },
});

