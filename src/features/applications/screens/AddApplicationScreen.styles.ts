import { StyleSheet } from "react-native";

import { typography } from "@/constants/typography";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  headerGradient: {
    height: 155,
  },

  headerSafeArea: {
    flex: 1,
  },

  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingBottom: 22,
  },

  headerSide: {
    width: 70,
    justifyContent: "center",
  },

  saveContainer: {
    alignItems: "flex-end",
  },

  backIcon: {
    fontFamily: typography.regular,
    fontSize: 46,
    lineHeight: 46,
    color: "#FFFFFF",
  },

  headerTitle: {
    flex: 1,
    fontFamily: typography.semiBold,
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },

  saveText: {
    fontFamily: typography.semiBold,
    fontSize: 18,
    color: "#FFFFFF",
  },

  formCard: {
    flex: 1,
    marginTop: -22,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: "hidden",
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 60,
  },

  fieldGroup: {
    marginBottom: 22,
  },

  label: {
    marginBottom: 9,
    fontFamily: typography.medium,
    fontSize: 15,
    color: "#596586",
  },

  required: {
    color: "#EF4444",
  },

  input: {
    width: "100%",
    height: 58,
    paddingHorizontal: 17,

    borderWidth: 1,
    borderColor: "#E2E5ED",
    borderRadius: 13,

    backgroundColor: "#FFFFFF",

    fontFamily: typography.regular,
    fontSize: 17,
    color: "#07124D",
  },

  selectField: {
    height: 58,
    paddingHorizontal: 17,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderWidth: 1,
    borderColor: "#E2E5ED",
    borderRadius: 13,

    backgroundColor: "#FFFFFF",
  },

  selectValue: {
    fontFamily: typography.regular,
    fontSize: 17,
    color: "#07124D",
  },

  chevron: {
    fontFamily: typography.regular,
    fontSize: 25,
    color: "#07124D",
    marginTop: -5,
  },

  calendarIcon: {
    fontSize: 20,
    color: "#07124D",
  },

  workSetupRow: {
    flexDirection: "row",
    gap: 10,
  },

  workSetupButton: {
    flex: 1,
    height: 54,

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "#E0E4EE",
    borderRadius: 12,

    backgroundColor: "#FFFFFF",
  },

  workSetupButtonSelected: {
    borderColor: "#1769F5",
    borderWidth: 1.5,
  },

  workSetupText: {
    fontFamily: typography.medium,
    fontSize: 15,
    color: "#687391",
  },

  workSetupTextSelected: {
    color: "#1769F5",
  },

  salaryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  salaryInput: {
    flex: 1,
  },

  salarySeparator: {
    fontFamily: typography.medium,
    fontSize: 18,
    color: "#07124D",
  },
});
