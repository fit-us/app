import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native"
import { useLocalSearchParams, Stack, useRouter } from "expo-router"
import EmotionSummaryDayBox from "@/app/components/EmotionSummaryDayBox"
import type { Emotion } from "@/app/types/emotion"
import { useEffect, useState } from "react"
import { Image } from "expo-image"
import { LinearGradient } from "expo-linear-gradient"

export default function AllEmotionsModal() {
    const { emotions: emotionsParam, dayEmotions, dayEmotionSummary, dayEmotionPlace, dayEmotionDescription, dayEmotionImage } = useLocalSearchParams()
    const [emotions, setEmotions] = useState<Emotion[]>([])
    const router = useRouter();
    useEffect(() => {
        if (emotionsParam && typeof emotionsParam === "string") {
            try {
                setEmotions(JSON.parse(emotionsParam))
            } catch (error) {
                console.error("감정 데이터 파싱 중 오류가 발생했습니다:", error)
            }
        }
    }, [emotionsParam])

    return (
        <>
            <Stack.Screen
                options={{
                    title: "전체 감정 기록",
                    headerShadowVisible: false,
                    presentation: "modal",
                    headerStyle: {
                        backgroundColor: "transparent"
                    },
                    headerTransparent: true,
                    headerRight: () => <Text onPress={() => router.back()}>완료</Text>,
                }}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient style={styles.rectangleLineargradient} colors={['rgba(105, 77, 255, 0.25)', 'rgba(255, 255, 255, 0.5)']} />
                {/* <Text>나중에 색깔 바꿔야함</Text> */}
                <ScrollView className="flex-1 px-5 py-6">
                    <View className="items-center mb-6">
                        <Image source={require("@/app/assets/0.png")} style={styles.dayEmotionImage} />
                        <Text className="text-2xl font-bold mb-2">{dayEmotions}</Text>
                        <Text className="text-lg text-gray-600 mb-2">{dayEmotionSummary}</Text>
                        <Text className="text-base text-gray-500 mb-1">{dayEmotionPlace}</Text>
                        <Text className="text-sm text-gray-500">{dayEmotionDescription}</Text>
                    </View>

                    <View className="h-px bg-gray-200 my-6" />
                    <View className="space-y-4">
                        {emotions.map((emotion, index) => (
                            <EmotionSummaryDayBox key={index} {...emotion} />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dayEmotionImage: {
        width: 266,
        height: 75,
        objectFit: "contain",
    },
    rectangleLineargradient: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
})
