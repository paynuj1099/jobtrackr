import { useEffect, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

import { styles } from "./DatePickerModal.styles";

type Props = {
  visible: boolean;
  value: Date;
  onChange: (date: Date) => void;
  onClose: () => void;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

export function DatePickerModal({ visible, value, onChange, onClose }: Props) {
  const [viewDate, setViewDate] = useState(value);

  useEffect(() => {
    if (visible) {
      setViewDate(value);
    }
  }, [visible, value]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  const previousMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const selectDay = (day: number) => {
    const selectedDate = new Date(year, month, day);

    onChange(selectedDate);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.card} onPress={() => {}}>
          <View style={styles.header}>
            <Pressable style={styles.navigationButton} onPress={previousMonth}>
              <Text style={styles.navigationText}>‹</Text>
            </Pressable>

            <Text style={styles.month}>
              {MONTHS[month]} {year}
            </Text>

            <Pressable style={styles.navigationButton} onPress={nextMonth}>
              <Text style={styles.navigationText}>›</Text>
            </Pressable>
          </View>

          <View style={styles.weekRow}>
            {WEEKDAYS.map((day, index) => (
              <View key={`${day}-${index}`} style={styles.dayCell}>
                <Text style={styles.weekDay}>{day}</Text>
              </View>
            ))}
          </View>

          <View style={styles.calendar}>
            {days.map((day, index) => {
              if (!day) {
                return <View key={`empty-${index}`} style={styles.dayCell} />;
              }

              const selected =
                value.getFullYear() === year &&
                value.getMonth() === month &&
                value.getDate() === day;

              return (
                <View key={day} style={styles.dayCell}>
                  <Pressable
                    style={[styles.dayButton, selected && styles.selectedDay]}
                    onPress={() => selectDay(day)}
                  >
                    <Text
                      style={[
                        styles.dayText,
                        selected && styles.selectedDayText,
                      ]}
                    >
                      {day}
                    </Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
