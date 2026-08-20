import { View } from "react-native";

import { styles } from "./PaginationDots.styles";

type Props = {
  total: number;
  currentIndex: number;
};

export function PaginationDots({ total, currentIndex }: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, index === currentIndex && styles.activeDot]}
        />
      ))}
    </View>
  );
}
