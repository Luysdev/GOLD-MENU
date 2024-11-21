import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Platform } from "react-native";
import { useRouter, Href } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function ComponenteNavSuperior({ selectedIconIndex }: { selectedIconIndex: number }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const router = useRouter(); 

    const handleMouseEnter = (index: number) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const iconItems = [
        { icon: <MaterialCommunityIcons name="home-outline" size={90} />, route: "pages/page_inicio" as Href },
        { icon: <FontAwesome5 name="hamburger" size={70} />, route: "pages/page_class_cardapio_hamburguer" as Href },
        { icon: <Ionicons name="pizza-outline" size={70} />, route: "pages/page_class_cardapio_pizza" as Href },
        { icon: <Ionicons name="beer" size={70} />, route: "pages/page_class_cardapio_bebidas" as Href },
        { icon: <Entypo name="drink" size={70} />, route: "/page_drink" as Href }
    ];

    return (
        <View style={styles.containerPrincipal}> 
            {iconItems.map((item, index) => {
                const isSelected = selectedIconIndex === index;
                const isHovered = hoveredIndex === index;

                return (
                    <Pressable
                        key={index}
                        style={[
                            styles.containerButton,
                            (isHovered || isSelected) && styles.hoveredContainer
                        ]}
                        onPress={() => router.push(item.route)} 
                        {...(Platform.OS === 'web' ? {
                            onMouseEnter: () => handleMouseEnter(index),
                            onMouseLeave: handleMouseLeave
                        } : {})}
                    >
                        {React.cloneElement(item.icon, {
                            color: isHovered || isSelected ? 'white' : 'white'
                        })}
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(40, 34, 23, 1)",
        display: "flex",
        alignItems: "center",
    },
    containerButton: {
        width: "100%",
        height: "12%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    hoveredContainer: {
        backgroundColor: "rgba(133, 113, 77, 1)", 
    },
});
