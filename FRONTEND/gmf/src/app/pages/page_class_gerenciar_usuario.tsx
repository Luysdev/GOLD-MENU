import React, { useState } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    Modal,
    TextInput,
    Button,
} from "react-native";
import ComponentCardUsuario from "@/src/components/funcionarios/component_cardfuncionario";
import ComponenteNavLateral from "@/src/components/menu/class_componente_nav_lateral";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";

export default function PageGerenciarUsuario() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleAddUsuario = () => {
        console.log("Usuário adicionado");
        setModalVisible(false);
    };

    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.nav}>
                <ComponenteNavSuperior selectedIconIndex={1} />
            </View>
            <View style={styles.navLateral}>
                <ComponenteNavLateral />
            </View>
            <ScrollView contentContainerStyle={styles.containerConteudo} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>Gerenciar Usuário</Text>
                    <TouchableOpacity style={styles.addButton} onPress={handleOpenModal}>
                        <Text style={styles.addButtonText}>+ Novo Usuário</Text>
                    </TouchableOpacity>
                </View>

                <ComponentCardUsuario
                    nome={"Luis"}
                    cpf={"135-394-149-32"}
                    telefone={"48991380281"}
                    cargo={"Balconista"}
                    showDelete={true}
                />
            </ScrollView>

            {/* Modal para adicionar novo usuário */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Adicionar Usuário</Text>
                        <TextInput style={styles.input} placeholder="Nome" />
                        <TextInput style={styles.input} placeholder="CPF" />
                        <TextInput style={styles.input} placeholder="Telefone" />
                        <TextInput style={styles.input} placeholder="Cargo" />
                        <View style={styles.modalButtons}>
                            <Button title="Cancelar" onPress={handleCloseModal} color="#FF5252" />
                            <Button title="Salvar" onPress={handleAddUsuario} />
                        </View>
                    </View>
                </View>
            </Modal>
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
        position: "absolute",
        right: 0,
        backgroundColor: "rgba(133, 113, 77, 1)",
        width: "70%",
        zIndex: 1,
    },
    containerConteudo: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 100,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    addButton: {
        backgroundColor: "#6A9955",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    addButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "80%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
});

