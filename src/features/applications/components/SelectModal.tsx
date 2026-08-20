import { Modal, Pressable, Text, View } from "react-native";

import { styles } from "./SelectModal.styles";

type Props = {
  visible: boolean;
  title: string;
  value: string;
  options: readonly string[];
  onSelect: (value: string) => void;
  onClose: () => void;
};

export function SelectModal({
  visible,
  title,
  value,
  options,
  onSelect,
  onClose,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.card} onPress={() => {}}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.options}>
            {options.map((option) => {
              const selected = option === value;

              return (
                <Pressable
                  key={option}
                  style={[styles.option, selected && styles.selectedOption]}
                  onPress={() => {
                    onSelect(option);
                    onClose();
                  }}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected && styles.selectedOptionText,
                    ]}
                  >
                    {option}
                  </Text>

                  {selected && <Text style={styles.check}>✓</Text>}
                </Pressable>
              );
            })}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
