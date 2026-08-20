import { Image, Text, View } from "react-native";

import { OnboardingSlide as OnboardingSlideType } from "../types/onboarding.types";
import { styles } from "./OnboardingSlide.styles";

type Props = {
  slide: OnboardingSlideType;
};

export function OnboardingSlide({ slide }: Props) {
  const isFirstSlide = slide.id === 1;

  return (
    <View style={[styles.container, styles.centeredContainer]}>
      <Image
        source={slide.image}
        style={[styles.image, styles.secondaryImage]}
        resizeMode="contain"
      />

      {isFirstSlide && (
        <Image
          source={require("../../../../assets/images/branding/jobtrackr-branding.webp")}
          style={styles.branding}
          resizeMode="contain"
        />
      )}

      <View
        style={[
          styles.textContainer,
          isFirstSlide
            ? styles.firstSlideTextContainer
            : styles.textContainerWithoutBranding,
        ]}
      >
        <Text style={styles.title}>{slide.title}</Text>

        <Text style={styles.highlight}>{slide.highlight}</Text>

        <Text style={styles.description}>{slide.description}</Text>
      </View>
    </View>
  );
}
