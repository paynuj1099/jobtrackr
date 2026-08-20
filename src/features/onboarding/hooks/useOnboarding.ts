import { useState } from "react";

import { onboardingSlides } from "../data/onboardingSlides";

export function useOnboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = onboardingSlides.length;

  const currentSlide = onboardingSlides[currentIndex];

  const isLastSlide = currentIndex === totalSlides - 1;

  const goToNextSlide = () => {
    if (!isLastSlide) {
      setCurrentIndex((previousIndex) => previousIndex + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((previousIndex) => previousIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  };

  return {
    currentIndex,
    currentSlide,
    totalSlides,
    isLastSlide,
    goToNextSlide,
    goToPreviousSlide,
    goToSlide,
  };
}
