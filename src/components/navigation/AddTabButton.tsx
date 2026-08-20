import { PlusOutlined } from "@lineiconshq/free-icons";
import { Lineicons } from "@lineiconshq/react-native-lineicons";
import { Pressable, View } from "react-native";

import { styles } from "./AddTabButton.styles";

type Props = {
  onPress?: () => void;
};

export function AddTabButton({ onPress }: Props) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Lineicons
          icon={PlusOutlined}
          size={34}
          color="#FFFFFF"
          strokeWidth={2}
        />
      </Pressable>
    </View>
  );
}
