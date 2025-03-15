import { Stack } from "expo-router";
import "../global.css"
import { EmotionProvider } from "@/app/EmotionContext";

export default function RootLayout() {
    return (
        <EmotionProvider>
            <Stack
                screenOptions={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerBackTitle: "뒤로",
                    headerBackVisible: true,
                    headerTitle: ""
                }}
            />
        </EmotionProvider>
    )
}
