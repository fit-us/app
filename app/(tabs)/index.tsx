import { useState, useRef } from "react"
import EmotionSummaryContainer from "@/app/components/EmotionSummaryContainer"
import { ImageBackground } from "expo-image"
import { router } from "expo-router"
import { View, Text, TouchableOpacity, FlatList, Dimensions, type ViewToken, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "@/app/components/Button"

export default function Home() {
    const emotionData = [
        {
            date: "3월 31일",
            dayEmotions: ["외로움", "지침", "거슬림"],
            dayEmotionSummary: "약간 불쾌함",
            dayEmotionPlace: "GS25 대구대현점",
            dayEmotionDescription: "진상손님이 짜증나게 함",
            dayEmotionImage: require("@/app/assets/0.png"),
        },
        {
            date: "3월 30일",
            dayEmotions: ["기쁨", "설렘", "만족"],
            dayEmotionSummary: "매우 행복함",
            dayEmotionPlace: "카페",
            dayEmotionDescription: "친구와 즐거운 시간을 보냄",
            dayEmotionImage: require("@/app/assets/0.png"),
        },
        {
            date: "3월 29일",
            dayEmotions: ["불안", "걱정", "초조"],
            dayEmotionSummary: "다소 불안함",
            dayEmotionPlace: "집",
            dayEmotionDescription: "내일 발표 준비로 긴장됨",
            dayEmotionImage: require("@/app/assets/0.png"),
        },
    ]

    const [currentIndex, setCurrentIndex] = useState<number | null>(null)
    const windowWidth = Dimensions.get("window").width
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index)
        }
    })

    return (
        <ImageBackground source={require("@/app/assets/bgImage.png")} style={{ flex: 1 }}>
            <SafeAreaView className="flex-1 items-center justify-center px-6">
                <View className="flex-1 w-full">
                    <View className="flex-row  items-center mb-4">
                        <Text className="font-bold text-2xl px-2 text-black">3월 31일 일요일</Text>
                        <TouchableOpacity>
                            <Text>기록</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={emotionData}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_, index) => index.toString()}
                        onViewableItemsChanged={onViewableItemsChanged.current}
                        viewabilityConfig={viewConfigRef.current}
                        renderItem={({ item }) => <EmotionSummaryContainer {...item} width={windowWidth} />}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        width: 20,
        backgroundColor: "#000"
    },

})