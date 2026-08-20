import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },

  skip: {
    color: "#3154F4",
    fontSize: 17,
    fontWeight: "600",
    paddingVertical: 8,
    paddingLeft: 16,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    paddingHorizontal: 24,
    paddingBottom: 18,
  },

  buttonContainer: {
    marginTop: 28,
  },

  noAccountContainer: {
    marginTop: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  shieldContainer: {
    width: 26,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },

  shieldCheck: {
    position: "absolute",
    top: 7,
  },

  noAccountText: {
    color: "#747B9D",
    fontSize: 15,
    fontWeight: "500",
  },
});
