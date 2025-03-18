import { EmotionProvider } from "@/app/EmotionContext"
import "../global.css"
import { router, Stack } from "expo-router"
import { Text, TouchableOpacity } from "react-native"

export default function RootLayout() {
    const cancelProcess = () => {
        return (
            <TouchableOpacity onPress={() => router.replace("/")} className="pr-6 px-4">
                <Text className="text-black">취소</Text>
            </TouchableOpacity>
        )
    }
    return (
        <EmotionProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" options={{
                    headerBackTitle: "뒤로"
                }} />
                <Stack.Screen
                    name="App"
                    options={{
                        headerShown: false,
                        headerBackTitle: "뒤로"
                    }}
                />
                <Stack.Screen
                    name="index"
                    options={{
                        animation: "ios_from_left",
                        headerShown: false,
                        headerBackTitle: "뒤로"
                    }}
                />
                <Stack.Screen
                    name="screens/form-register-emotion"
                    options={{
                        animation: "ios_from_right",
                        headerTitle: "",
                        headerBackTitle: "뒤로",
                        headerRight: cancelProcess,
                        headerShown: true,
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="screens/form-select-emotion"
                    options={{
                        animation: "ios_from_right",
                        headerRight: cancelProcess,
                        headerTitle: "감정 기록",
                        headerTitleAlign: "center",
                        headerBackTitle: "뒤로",
                        headerShown: true,
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="screens/form-emotion-expression"
                    options={{
                        animation: "ios_from_right",
                        headerRight: cancelProcess,
                        headerTitle: "",
                        headerBackTitle: "뒤로",
                        headerShown: true,
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="screens/form-screen"
                    options={{
                        animation: "slide_from_right",
                        headerRight: cancelProcess,
                        headerTitle: "",
                        headerBackTitle: "뒤로",
                        headerShown: true,
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="screens/emotions-all"
                    options={{
                        title: "전체 감정 기록",
                        headerShadowVisible: false,
                        animation: "slide_from_bottom",
                        presentation: "modal",
                        headerStyle: {
                            backgroundColor: "transparent"
                        },
                        headerShown: true,
                        headerTransparent: true,
                        headerRight: () => <Text onPress={() => router.back()}>완료</Text>,
                    }}
                />
            </Stack>
        </EmotionProvider>
    )
}

