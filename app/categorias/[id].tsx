import { FlatList, Text, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import { data } from "../../data";

export default function ProdutosCategoria() {
  const { id } = useLocalSearchParams();
  const produtos = data.products.filter((p) => p.idCategory.toString() === id);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Link
          href={{
            pathname: "/produtos/[id]",
            params: { id: item.id.toString() },
          }}
          asChild
        >
          <Pressable style={styles.card}>
            <Text style={styles.name}>{item.title}</Text>
            <Text>R$ {item.price.toFixed(2)}</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, margin: 8, backgroundColor: "#f5f5f5", borderRadius: 8 },
  name: { fontSize: 16, fontWeight: "bold" },
});
