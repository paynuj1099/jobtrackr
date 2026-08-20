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
    maxWidth: 390,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  month: {
    fontFamily: typography.bold,
    fontSize: 18,
    color: "#07124D",
  },

  navigationButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F6FB",
  },

  navigationText: {
    fontFamily: typography.regular,
    fontSize: 31,
    lineHeight: 34,
    color: "#07124D",
  },

  weekRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  calendar: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  dayCell: {
    width: "14.285%",
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },

  weekDay: {
    fontFamily: typography.semiBold,
    fontSize: 13,
    color: "#8A93AC",
  },

  dayButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedDay: {
    backgroundColor: "#3154F4",
  },

  dayText: {
    fontFamily: typography.medium,
    fontSize: 14,
    color: "#07124D",
  },

  selectedDayText: {
    color: "#FFFFFF",
  },
});
