import {
  Briefcase2Outlined,
  CalendarDaysOutlined,
  Home2Outlined,
  MenuHamburger1Outlined,
} from "@lineiconshq/free-icons";
import { Lineicons } from "@lineiconshq/react-native-lineicons";
import { router, Tabs } from "expo-router";

import { AddTabButton } from "@/components/navigation/AddTabButton";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#5535F4",
        tabBarInactiveTintColor: "#697394",

        tabBarStyle: {
          height: 82,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#F0F1F6",
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Inter_500Medium",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Lineicons
              icon={Home2Outlined}
              size={25}
              color={color as string}
              strokeWidth={focused ? 2.2 : 1.8}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: ({ color, focused }) => (
            <Lineicons
              icon={Briefcase2Outlined}
              size={25}
              color={color as string}
              strokeWidth={focused ? 2.2 : 1.8}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          title: "",
          tabBarIcon: () => null,
          tabBarButton: () => (
            <AddTabButton onPress={() => router.push("/add-application")} />
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color, focused }) => (
            <Lineicons
              icon={CalendarDaysOutlined}
              size={25}
              color={color as string}
              strokeWidth={focused ? 2.2 : 1.8}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
            <Lineicons
              icon={MenuHamburger1Outlined}
              size={27}
              color={color as string}
              strokeWidth={focused ? 2.2 : 1.8}
            />
          ),
        }}
      />
    </Tabs>
  );
}
