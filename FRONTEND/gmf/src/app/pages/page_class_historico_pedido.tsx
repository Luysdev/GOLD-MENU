import ComponenteNavLateral from "@/src/components/menu/class_componente_nav_lateral";
import ComponenteNavSuperior from "@/src/components/menu/class_componente_nav_superior";
import ComponentPedidoCard from "@/src/components/pedidos/component_cardpedido";
import { View, StyleSheet, ScrollView, Text } from "react-native";

const pedidos = [
    {
      numeroPedido: "02",
      produtos: [
        { nome: "Hamburguer Salada Gourmet", quantidade: 1, valorUnitario: 35.90 },
        { nome: "Pizza Strogonoff de Frango", quantidade: 1, valorUnitario: 39.90 },
        { nome: "Refrigerante Lata Coca-Cola", quantidade: 1, valorUnitario: 6.00 },
      ],
      data: "03/08/2024",
      total: 81.80,
    },
    {
        numeroPedido: "02",
        produtos: [
          { nome: "Hamburguer Salada Gourmet", quantidade: 1, valorUnitario: 35.90 },
          { nome: "Pizza Strogonoff de Frango", quantidade: 1, valorUnitario: 39.90 },
          { nome: "Refrigerante Lata Coca-Cola", quantidade: 1, valorUnitario: 6.00 },
        ],
        data: "03/08/2024",
        total: 81.80,
      },
    // Adicione outros pedidos aqui
  ];
  
export default function PageGerenciarProduto() {
    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.nav}>
                <ComponenteNavSuperior selectedIconIndex={1} />
            </View>
            <View style={styles.navLateral}>
                <ComponenteNavLateral/>
            </View>
            <ScrollView contentContainerStyle={styles.containerConteudo} showsVerticalScrollIndicator={false}>
                <Text style={styles.tituloPage} >Gerenciar Protudutos</Text >
                {pedidos.map((pedido, index) => (
                    <ComponentPedidoCard
                        key={index}
                        numeroPedido={pedido.numeroPedido}
                        produtos={pedido.produtos}
                        data={pedido.data}
                        total={pedido.total}
                    />
                ))}
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
    tituloPage: {
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