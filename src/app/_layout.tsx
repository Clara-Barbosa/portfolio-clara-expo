import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0f172a",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#020617",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Portfólio",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="sobre"
        options={{
          title: "Sobre",
        }}
      />

      <Stack.Screen
        name="projetos"
        options={{
          title: "Projetos",
        }}
      />

      <Stack.Screen
        name="jogo"
        options={{
          title: "Jogo da Forca",
        }}
      />
    </Stack>
  );
}