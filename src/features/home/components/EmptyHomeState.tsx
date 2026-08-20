import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, Text, View } from "react-native";

import { styles } from "./EmptyHomeState.styles";

type Props = {
  onAddApplication: () => void;
  onLearnMore: () => void;
};

export function EmptyHomeState({ onAddApplication, onLearnMore }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/home/home-empty.webp")}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>No applications yet</Text>

        <Text style={styles.description}>
          Start tracking your job applications{"\n"}
          and land your dream role.
        </Text>

        <Pressable
          style={({ pressed }) => [styles.addButton, pressed && styles.pressed]}
          onPress={onAddApplication}
        >
          <Ionicons name="add" size={28} color="#FFFFFF" />

          <Text style={styles.addButtonText}>Add Your First Application</Text>
        </Pressable>

        <Pressable
          onPress={onLearnMore}
          style={({ pressed }) => [
            styles.learnButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.learnText}>Learn how to get started</Text>
        </Pressable>
      </View>
    </View>
  );
}
