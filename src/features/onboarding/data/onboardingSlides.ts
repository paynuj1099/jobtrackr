import { OnboardingSlide } from "../types/onboarding.types";

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: 1,
    image: require("../../../../assets/images/onboarding/onboarding-slide-1.webp"),
    title: "Track every step.",
    highlight: "Get your next offer.",
    description:
      "Manage your job applications, interviews, and follow-ups — all in one place.",
  },
  {
    id: 2,
    image: require("../../../../assets/images/onboarding/onboarding-slide-2.webp"),
    title: "Stay on top of deadlines.",
    highlight: "Never miss a follow-up.",
    description:
      "Keep interviews, reminders, and important dates organized in one place.",
  },
  {
    id: 3,
    image: require("../../../../assets/images/onboarding/onboarding-slide-3.webp"),
    title: "See your progress.",
    highlight: "Land your next role.",
    description:
      "Follow your application journey and stay focused on what comes next.",
  },
];
