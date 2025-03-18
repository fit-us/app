import { Stack, useRouter } from "expo-router";
import "../global.css"
import { EmotionProvider } from "@/app/EmotionContext";

export default function RootLayout() {
    const router = useRouter();
    return (
        <EmotionProvider>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        presentation: "transparentModal",
                        headerShown: false,
                    }}
                />
            </Stack>
        </EmotionProvider>
    )
}
