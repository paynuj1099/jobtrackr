import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#1767F5",

    alignItems: "center",
    justifyContent: "center",

    // Lift it above the tab bar
    transform: [{ translateY: -18 }],

    shadowColor: "#1767F5",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14,

    elevation: 8,
  },

  pressed: {
    opacity: 0.85,
    transform: [{ translateY: -18 }, { scale: 0.96 }],
  },
});
