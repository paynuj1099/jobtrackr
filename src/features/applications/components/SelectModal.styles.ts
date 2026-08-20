import { StyleSheet } from "react-native";

import { typography } from "@/constants/typography";

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(7, 18, 77, 0.28)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
  },

  title: {
    fontFamily: typography.bold,
    fontSize: 19,
    color: "#07124D",
    marginBottom: 14,
  },

  options: {
    gap: 6,
  },

  option: {
    minHeight: 52,
    borderRadius: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectedOption: {
    backgroundColor: "#F2F5FF",
  },

  optionText: {
    fontFamily: typography.regular,
    fontSize: 16,
    color: "#07124D",
  },

  selectedOptionText: {
    fontFamily: typography.semiBold,
    color: "#3154F4",
  },

  check: {
    fontSize: 18,
    color: "#3154F4",
  },
});
