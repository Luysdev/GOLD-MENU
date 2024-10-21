import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/page_inicio" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/page_cadastro_produto" options={{ headerShown: false }}/>
    </Stack>
  );
}
