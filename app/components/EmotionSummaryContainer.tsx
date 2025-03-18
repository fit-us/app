"use client"

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { Image } from "expo-image"
import EmotionSummaryDayBox from "@/app/components/EmotionSummaryDayBox"
import type { Emotion } from "@/app/types/emotion"
import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import NoEmotionSummaryDayBox from "@/app/components/NoEmotionSummaryBox"

type EmotionSummaryContainerProps = {
    date: string
    dayEmotions: string[]
    dayEmotionSummary: string
    dayEmotionPlace: string
    dayEmotionDescription: string
    dayEmotionImage: any
    width?: number
}

const EmotionSummaryContainer = ({
    date,
    dayEmotions,
    dayEmotionSummary,
    dayEmotionPlace,
    dayEmotionDescription,
    dayEmotionImage,
    width = Dimensions.get("window").width,
}: EmotionSummaryContainerProps) => {
    const [emotions, setEmotions] = useState<Emotion[]>()
    const router = useRouter()
    const containerWidth = width - 32

    useFocusEffect(
        useCallback(() => {
            const getEmotions = async () => {
                try {
                    const storedEmotions = await AsyncStorage.getItem("emotions")
                    if (storedEmotions !== null) {
                        setEmotions(JSON.parse(storedEmotions))
                    }
                } catch (error) {
                    console.error("감정 데이터를 불러오는 중 오류가 발생했습니다:", error)
                }
            }
            getEmotions()
        }, []),
    )

    const handleShowAllEmotions = () => {
        if (emotions) {
            router.push({
                pathname: "/screens/emotions-all",
                params: {
                    emotions: JSON.stringify(emotions),
                    date,
                    dayEmotions: JSON.stringify(dayEmotions),
                    dayEmotionSummary,
                    dayEmotionPlace,
                    dayEmotionDescription,
                    dayEmotionImage,
                },
            })
        }
    }

    return (
        <View style={{ width: containerWidth }}>
            <ScrollView
                className="flex-1 rounded-3xl"
                contentContainerStyle={{ paddingHorizontal: 8 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={[styles.cardContainer, { width: containerWidth - 16 }]}>
                    <LinearGradient
                        style={styles.background}
                        locations={[0, 0.71]}
                        colors={["rgba(105, 77, 255, 0.25)", "rgba(255, 255, 255, 0.5)"]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    />
                    <View className="px-3 py-6 rounded-full">
                        <Text className="text-lg text-black text-center mb-6">하루의 감정</Text>
                        <View className="items-center justify-center my-6">
                            <Image source={dayEmotionImage} style={styles.dayEmotionImage} />
                        </View>
                        <View className="items-center mb-4">
                            <Text className="text-2xl font-bold mb-2">{dayEmotions.join(", ")}</Text>
                            <Text className="text-lg text-gray-600 mb-2">{dayEmotionSummary}</Text>
                            <Text className="text-base text-gray-500 mb-1">{dayEmotionPlace}</Text>
                            <Text className="text-sm text-gray-500">{dayEmotionDescription}</Text>
                        </View>
                        <View className="h-px bg-gray-200 my-6" />
                        <Text className="text-lg text-gray-600 mb-4 self-center">순간의 감정</Text>
                        <View className="space-y-4">
                            {(emotions && emotions.length > 0) ? <EmotionSummaryDayBox {...emotions[0]} /> : <NoEmotionSummaryDayBox />}
                        </View>

                        {emotions && emotions.length > 0 && (
                            <TouchableOpacity onPress={handleShowAllEmotions} className="items-center justify-center pt-4 mb-2">
                                <Text className="text-gray-500 text-base">더 보기</Text>
                                <View className="w-10 h-1 bg-gray-300 rounded-full" />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 24,
        overflow: "hidden",
        marginVertical: 8,
    },
    container: {
        flex: 1,
        backgroundColor: "#f5f3ff",
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    dayEmotionImage: {
        width: 266,
        height: 75,
        objectFit: "contain",
    },
})

export default EmotionSummaryContainer

