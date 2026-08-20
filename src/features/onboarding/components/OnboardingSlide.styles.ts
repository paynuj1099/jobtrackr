import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  centeredContainer: {
    justifyContent: "center",
    paddingBottom: 15,
  },

  image: {
    width: "88%",
    maxWidth: 430,
    height: "43%",
    minHeight: 260,
    maxHeight: 390,
  },

  // Same size currently used by slides 2 and 3
  secondaryImage: {
    width: "94%",
    maxWidth: 460,
    height: "47%",
    maxHeight: 420,
  },

  branding: {
    width: "52%",
    maxWidth: 245,
    height: 52,

    // Pull branding up so it doesn't push
    // slide 1 away from slides 2 and 3
    marginTop: -18,
    marginBottom: 6,
  },

  textContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 28,
  },

  // Slide 1 only
  firstSlideTextContainer: {
    marginTop: 0,
  },

  // Slides 2 and 3 — unchanged
  textContainerWithoutBranding: {
    marginTop: 8,
  },

  title: {
    fontSize: 30,
    lineHeight: 37,
    fontWeight: "800",
    letterSpacing: -0.5,
    color: "#07124D",
    textAlign: "center",
  },

  highlight: {
    fontSize: 30,
    lineHeight: 37,
    fontWeight: "800",
    letterSpacing: -0.5,
    color: "#3154F4",
    textAlign: "center",
  },

  description: {
    maxWidth: 420,
    marginTop: 18,
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "400",
    color: "#747B9D",
    textAlign: "center",
  },
});
