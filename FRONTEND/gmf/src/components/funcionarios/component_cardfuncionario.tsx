import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const { height } = Dimensions.get("window");

const ComponentCardUsuario = ({ showDelete = false, nome, cpf, telefone, cargo }) => {
    const handleDelete = () => {
        console.log("Usuário excluído");
    };

    return (
        <View style={styles.containerPrincipal}>
            {showDelete && (
                <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.deleteButtonText}>X</Text>
                </TouchableOpacity>
            )}
            <View style={styles.containerInfo}>
                <Text style={styles.title}>Nome: {nome}</Text>
                <Text style={styles.text}>CPF: {cpf}</Text>
                <Text style={styles.text}>Telefone: {telefone}</Text>
                <Text style={styles.text}>Cargo: {cargo}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: "white",
        width: "100%",
        height: height * 0.15,
        borderRadius: 15,
        marginBottom: 15,
        padding: 10,
        position: "relative",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    deleteButton: {
        position: "absolute",
        top: 10,
        right: 10,
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    deleteButtonText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
    },
    containerInfo: {
        height: "100%",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        fontSize: 14,
        fontWeight: "300",
        color: "gray",
    },
});

export default ComponentCardUsuario;
