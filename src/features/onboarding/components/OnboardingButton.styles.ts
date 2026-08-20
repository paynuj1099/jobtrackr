import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 16,

    shadowColor: "#3154F4",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 14,

    elevation: 6,
  },

  gradient: {
    height: 60,
    borderRadius: 16,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "400",
    marginLeft: 10,
    marginTop: -2,
  },

  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
});
