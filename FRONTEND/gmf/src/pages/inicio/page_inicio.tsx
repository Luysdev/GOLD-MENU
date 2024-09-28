import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
import ComponentNavBarLateral from "@/src/components/inicio/component_navbarlateral";
import ComponentNav from "@/src/components/inicio/component_navbarlateral";
import ComponentNavBarSuperiorCliente from "@/src/components/inicio/component_navbarsuperiorcliente"
import ComponentNavBarSuperiorAdministrador from "@/src/components/inicio/component_navbarsuperioraadministrador"

export default function Inicio () {
    return (
        <View style={styles.containerPrincipal}>
            <ComponentNavBarLateral/>
            <ComponentNavBarSuperiorAdministrador/>
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

