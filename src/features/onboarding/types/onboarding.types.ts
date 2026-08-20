import { ImageSourcePropType } from "react-native";

export interface OnboardingSlide {
  id: number;
  image: ImageSourcePropType;
  title: string;
  highlight: string;
  description: string;
}
