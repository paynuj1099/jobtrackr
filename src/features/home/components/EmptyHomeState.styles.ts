import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingBottom: 35,
  },

  image: {
    width: "92%",
    maxWidth: 430,
    height: 380,

    // Move illustration down without moving the text
    transform: [{ translateY: 35 }],
  },

  content: {
    width: "100%",
    maxWidth: 500,
    alignItems: "center",
  },

  title: {
    fontSize: 31,
    lineHeight: 38,
    fontWeight: "800",
    letterSpacing: -0.6,
    color: "#07124D",
    textAlign: "center",
  },

  description: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "400",
    color: "#747B9D",
    textAlign: "center",
  },

  addButton: {
    width: "100%",
    minHeight: 62,
    marginTop: 34,
    borderRadius: 14,
    backgroundColor: "#3154F4",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,

    shadowColor: "#3154F4",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.18,
    shadowRadius: 16,

    elevation: 5,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  learnButton: {
    marginTop: 27,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  learnText: {
    color: "#1665F5",
    fontSize: 17,
    fontWeight: "600",
  },

  pressed: {
    opacity: 0.82,
  },
});
