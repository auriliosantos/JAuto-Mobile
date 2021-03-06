import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCBDC0",
    borderWidth: 1,
    borderColor: "#BCBDC0",
    borderRadius: 8,
    alignItems: "flex-start",
    padding: 24,
    width: 340,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  label: {
    fontFamily: "Roboto_700Bold",
    color: "#023E8A",
    fontSize: 18,
  },
  output: {
    marginHorizontal: 24,
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#023E8A",
  },
  lastItem: {
    marginBottom: 16,
  },
  buttonsBar: {
    backgroundColor: "#023E8A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttons: {
    flexDirection: "row",
  },
  buttonText: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    color: "#C2E812",
    marginLeft: 12,
  },
  icon: {
    lineHeight: 26,
  },
});

export default styles;
