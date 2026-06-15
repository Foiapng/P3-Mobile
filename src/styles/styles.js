import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2235",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#2C314D",
    borderRadius: 24,
    padding: 25,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  subtitle: {
    color: "#CFCFCF",
    fontSize: 15,
    marginBottom: 20,
  },

  input: {
    width: 120,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 14,
    textAlign: "center",
    fontSize: 28,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#FFB703",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 14,
    marginBottom: 20,
  },

  secondaryButton: {
    backgroundColor: "#4CAF50",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  message: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },

  attempts: {
    color: "#FFCF56",
    fontSize: 18,
    fontWeight: "bold",
  },
});