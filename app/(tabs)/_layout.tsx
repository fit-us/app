import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#8B5CF6",
                tabBarInactiveTintColor: "#9CA3AF",
                tabBarStyle: {
                    paddingBottom: 10,
                    paddingTop: 5,
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "홈",
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
                    animation: "shift"
                }}
            />
            <Tabs.Screen
                name="report"
                options={{
                    title: "레포트",
                    tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="cbt-report"
                options={{
                    title: "CBT 레포트",
                    tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "개인설정",
                    tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
                }}
            />
        </Tabs>
    )
}

