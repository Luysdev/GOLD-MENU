    import React from "react";
    import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

    interface Produto {
    nome: string;
    quantidade: number;
    valorUnitario: number;
    }

    interface PedidoCardProps {
    numeroPedido: string;
    produtos: Produto[];
    data: string;
    total: number;
    }

    const ComponentPedidoCard: React.FC<PedidoCardProps> = ({ numeroPedido, produtos, data, total }) => {
    return (
        <View style={styles.card}>
        {/* Header: Pedido Number and Date */}
        <View style={styles.header}>
            <Text style={styles.title}>Pedido #{numeroPedido}</Text>
            <Text style={styles.date}>Data: {data}</Text>
        </View>

        {/* Items Section */}
        <View style={styles.body}>
            <Text style={styles.subtitle}>Itens do Pedido</Text>
            
            {/* Header for product columns */}
            <View style={styles.itemHeader}>
            <Text style={styles.itemHeaderText}>Produto</Text>
            <Text style={styles.itemHeaderText}>Qtd</Text>
            <Text style={styles.itemHeaderText}>Valor Unitário</Text>
            </View>

            {/* Products */}
            {produtos.map((produto, index) => (
            <View key={index} style={styles.item}>
                <Text style={styles.itemName}>{produto.nome}</Text>
                <Text style={styles.itemQty}>{produto.quantidade}</Text>
                <Text style={styles.itemPrice}>R$ {produto.valorUnitario.toFixed(2)}</Text>
            </View>
            ))}
        </View>

        {/* Separator Line */}
        <View style={styles.separator}></View>

        {/* Footer: Total and Cancel Button */}
        <View style={styles.footer}>
            <Text style={styles.total}>TOTAL</Text>
            <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <Text style={styles.totalAmount}>R$ {total.toFixed(2)}</Text>
        </View>
        </View>
    );
    };

    const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 20,
        marginBottom: 20,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 5,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    date: {
        fontSize: 12,
        color: "#777",
    },
    body: {
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 5,
    },
    itemHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingBottom: 5,
    },
    itemHeaderText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#555",
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    itemName: {
        fontSize: 14,
    },
    itemQty: {
        fontSize: 14,
    },
    itemPrice: {
        fontSize: 14,
        color: "#555",
    },
    separator: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 10,
    },
    footer: {
        marginTop: 10,
        flexDirection: "row",
    },
    total: {
        fontSize: 24,
        fontWeight: "800",
        color: "black",
        marginRight: "55%",
    },
    totalAmount: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    cancelButton: {
        backgroundColor: "#FF3B30", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        width: 120, // Aumente ou ajuste o valor conforme necessário
        height: 40, // A altura continua controlada
        marginRight: 20, // Ajuste conforme necessário para o espaçamento
    },    
    cancelButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    });

    export default ComponentPedidoCard;
