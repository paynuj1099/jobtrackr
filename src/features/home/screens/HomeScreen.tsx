import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EmptyHomeState } from "../components/EmptyHomeState";

import { styles } from "./HomeScreen.styles";

export function HomeScreen() {
  const handleAddApplication = () => {
    router.push("/add-application");
  };

  const handleLearnMore = () => {
    console.log("Learn more");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.content}>
        <EmptyHomeState
          onAddApplication={handleAddApplication}
          onLearnMore={handleLearnMore}
        />
      </View>
    </SafeAreaView>
  );
}
