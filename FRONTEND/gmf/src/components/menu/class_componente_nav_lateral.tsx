import { useNavigation } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ComponenteNavLateral() {
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    const toggleMenu = (menuId: number) => {
        setOpenMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
    };
    const navigation = useNavigation();
    
    return (
        <View style={style.containerPrincipal}>
            {/* Menu principal */}
            <View style={style.menuContainer}>
                <TouchableOpacity style={style.containerOption} onPress={() => toggleMenu(1)}>
                    <Text style={style.titleOption}>Menu</Text>
                </TouchableOpacity>
                {openMenu === 1 && (
                    <View style={style.subMenu}>
                        <TouchableOpacity style={style.subContainerOption} onPress={() => navigation.navigate('pages/page_class_gerenciar_produto')}>
                            <Text style={style.titleOption}>Gerenciar Produtos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.subContainerOption} onPress={() => navigation.navigate('pages/page_class_gerenciar_usuario')}>
                            <Text style={style.titleOption}>Gerenciar Usuario</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.subContainerOption}>
                            <Text style={style.titleOption}>Emissao de Relatorio</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.subContainerOption}>
                            <Text style={style.titleOption}>Pagamentos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.subContainerOption}>
                            <Text style={style.titleOption}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            {/* Outros Menus */}
            <View style={style.menuContainer}>
                <TouchableOpacity style={style.containerOption} onPress={() => navigation.navigate('pages/page_class_historico_pedido')}>
                    <Text style={style.titleOption}>Histórico de Pedidos</Text>
                </TouchableOpacity>
            </View>

            <View style={style.menuContainer}>
                <TouchableOpacity style={style.containerOption}>
                    <Text style={style.titleOption}>Solicitar Garçom</Text>
                </TouchableOpacity>
            </View>

            <View style={style.menuContainer}>
                <TouchableOpacity style={style.containerOption}  onPress={() => navigation.navigate('pages/page_class_carrinho')}>
                    <Text style={style.titleOption}>Carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    containerPrincipal: {
        backgroundColor: 'rgba(133, 113, 77, 1)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row', // Mudança para coluna para os menus ficarem embaixo
        borderWidth: 0.1,
        borderColor: 'white',
    },
    menuContainer: {
        flex: 1, // Garantir que todos os menus ocupem o mesmo espaço
        height: 80, // Tamanho fixo para cada menu
    },
    containerOption: {
        textAlign: 'center',
        height: '100%',
        padding: 20,
        justifyContent: 'center',
    },
    titleOption: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: "400",
    },
    subMenu: {
        position: 'absolute',
        top: 80, // Posiciona o submenu abaixo do item principal
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(133, 113, 77, 1)',
        zIndex: 1000, // Garante que o submenu fique sobre os outros itens
    },
    subContainerOption: {
        backgroundColor: 'rgba(133, 113, 77, 1)',
        marginBottom: 5,
        height: 50,
        paddingLeft: 20,
        justifyContent: 'center',
    },
});
