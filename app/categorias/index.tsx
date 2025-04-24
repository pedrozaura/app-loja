import { FlatList, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { data } from "../../data";

export default function Categorias() {
  return (
    <FlatList
      data={data.categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Link
          href={{
            pathname: "/categorias/[id]",
            params: { id: item.id.toString() },
          }}
          asChild
        >
          <Pressable style={styles.card}>
            <Text style={styles.name}>{item.title}</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, margin: 8, backgroundColor: "#eee", borderRadius: 8 },
  name: { fontSize: 18 },
});
