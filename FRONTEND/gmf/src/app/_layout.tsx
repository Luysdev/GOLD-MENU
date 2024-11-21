import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/page_inicio" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/page_class_gerenciar_produto" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/page_class_gerenciar_usuario" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/page_class_cardapio_hamburguer" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/page_class_cardapio_pizza" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/page_class_cardapio_bebidas" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/page_class_historico_pedido" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/page_class_carrinho" options={{ headerShown: false }}/>
    </Stack>
  );
}
