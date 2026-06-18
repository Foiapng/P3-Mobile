import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#145d58",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  // card: {
  //   padding: 25,
  //   borderRadius: 8,
  //   backgroundColor: "#419772",
  //   width: "80%",
  //   alignItems: "center",
  // },

  title: {
    color: "#FFFFFF",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 28,
  },

  subtitle: {
    marginBottom: 20,
    fontSize: 15,
    color: "#ffffff",
  },

  input: {
    textAlign: "center",
    marginBottom: 20,
    width: 120,
    backgroundColor: "#FFF",
    fontSize: 28,
    borderRadius: 8,
    height: 60,
  },

  button: {
    paddingHorizontal: 35,
    backgroundColor: "#0c3238",
    marginBottom: 20,
    borderRadius: 8,
    paddingVertical: 14,
  },

  secondaryButton: {
    backgroundColor: "#0c3238",
  },

  buttonText: {
    color: "#FFFFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  message: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },

  attempts: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#0c3238",
    fontSize: 18,
  },
});