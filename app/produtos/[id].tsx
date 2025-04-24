import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { data } from "../../data";

export default function ProdutoDetalhe() {
  const { id } = useLocalSearchParams();
  const produto = data.products.find((p) => p.id.toString() === id);

  if (!produto) return <Text>Produto não encontrado</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.image }} style={styles.img} />
      <Text style={styles.nome}>{produto.title}</Text>
      <Text style={styles.desc}>{produto.description}</Text>
      <Text style={styles.preco}>R$ {produto.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  img: { width: "100%", height: 200, borderRadius: 8, marginBottom: 12 },
  nome: { fontSize: 22, fontWeight: "bold" },
  desc: { fontSize: 16, marginVertical: 8 },
  preco: { fontSize: 18, fontWeight: "bold", color: "green" },
});
