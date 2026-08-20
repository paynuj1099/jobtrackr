import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text } from "react-native";

import { styles } from "./OnboardingButton.styles";

type Props = {
  isLastSlide: boolean;
  onPress: () => void;
};

export function OnboardingButton({ isLastSlide, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <LinearGradient
        colors={["#3154F4", "#6945E8"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradient}
      >
        <Text style={styles.text}>{isLastSlide ? "Get Started" : "Next"}</Text>

        {!isLastSlide && <Text style={styles.arrow}>›</Text>}
      </LinearGradient>
    </Pressable>
  );
}
