import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
