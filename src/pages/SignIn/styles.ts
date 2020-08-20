import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#023E8A",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
  },
  input: {
    backgroundColor: "#fff",
    height: 50,
    width: "90%",
    marginBottom: 15,
    color: "#BCBDC0",
    fontSize: 17,
    fontFamily: "Roboto_400Regular",
    borderRadius: 8,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: "#C2E812",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  submitText: {
    fontFamily: "Roboto_700Bold",
    color: "#023E8A",
    fontSize: 18,
  },
});

export default styles;
