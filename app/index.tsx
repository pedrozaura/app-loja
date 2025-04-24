import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Loja</Text>
      <Text style={styles.title}>Pegue e Pague!</Text>
      <Text style={styles.title}>Seu Dinheiro, Nossa Alegria!</Text>

      <Button
        title="Ver Categorias"
        onPress={() => router.push("/categorias")}
      />
      <Button
        title="Ver Produtos"
        onPress={() => router.push("/categorias/1")}
      />

      <Button title="Sobre" onPress={() => router.push("/sobre")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold", // Negrito
    textAlign: "center",
    marginBottom: 4, // Diminui o espaço para o próximo texto
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold", // Negrito também
    textAlign: "center",
    marginBottom: 24, // Espaçamento antes dos botões
  },
});
