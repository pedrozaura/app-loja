import { View, Text, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre Mim</Text>
      <Text>Nome: Pedro Zaura e Lucas Lima</Text>
      <Text>Curso: Engenharia de Software</Text>
      <Text>Semestre: 5º</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
});
