import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#023e8a",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto_700Bold",
    color: "#BCBDC0",
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
  },
});

export default styles;
