import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { OnboardingButton } from "../components/OnboardingButton";
import { OnboardingSlide } from "../components/OnboardingSlide";
import { PaginationDots } from "../components/PaginationDots";
import { useOnboarding } from "../hooks/useOnboarding";
import { completeOnboarding } from "../services/onboardingStorage";

import { styles } from "./OnboardingScreen.styles";

export function OnboardingScreen() {
  const {
    currentIndex,
    currentSlide,
    totalSlides,
    isLastSlide,
    goToNextSlide,
  } = useOnboarding();

  const handleNext = async () => {
    if (isLastSlide) {
      await completeOnboarding();
      router.replace("/(tabs)");
      return;
    }

    goToNextSlide();
  };

  const handleSkip = async () => {
    await completeOnboarding();
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View />

        <Text style={styles.skip} onPress={handleSkip}>
          Skip
        </Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <OnboardingSlide slide={currentSlide} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <PaginationDots total={totalSlides} currentIndex={currentIndex} />

        <View style={styles.buttonContainer}>
          <OnboardingButton isLastSlide={isLastSlide} onPress={handleNext} />
        </View>

        <View style={styles.noAccountContainer}>
          <Ionicons name="shield-checkmark-outline" size={25} color="#747B9D" />

          <Text style={styles.noAccountText}>No account required</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
