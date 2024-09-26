import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
import ComponentNavBarLateral from "@/src/components/inicio/component_navbarlateral";

export default function Inicio () {
    return (
        <View style={styles.containerPrincipal}>
            <ComponentNavBarLateral/>
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

