import { LinearGradient } from "expo-linear-gradient"
import { Stack, router } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native"
import dayjs from "dayjs"
import { useState } from "react"
import Button from "@/app/components/Button"
import { useEmotion } from "@/app/EmotionContext"
import { PALETTE } from "@/app/styles/palette"

export default function FormEmotion() {
    const { emotion, setMoment } = useEmotion()
    const [selectedMoment, setSelectedMoment] = useState<string | null>(null)

    const day = dayjs()
    const dayTransformer = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
    const now = day.get("M") + 1 + "월 " + day.get("D") + "일 " + dayTransformer[day.get("d")]

    const handleSelect = (moment: string) => {
        setSelectedMoment(moment)
    }

    const handleNext = () => {
        if (selectedMoment) {
            setMoment(selectedMoment)
            router.push("/screens/form-select-emotion")
        }
    }

    const isButtonEnabled = selectedMoment !== null

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={PALETTE[emotion].BACKGROUND_COLOR} style={styles.background} />
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={() => router.replace("/")} className="mr-4">
                            <Text className="text-base font-medium text-black">취소</Text>
                        </TouchableOpacity>
                    ),
                    headerTransparent: true,
                    headerTitle: "",
                    headerShadowVisible: false,
                }}
            />

            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.greetingStyle}>감정을 기록해보세요</Text>
                    <Text style={styles.dayStyle}>{now}</Text>
                </View>

                <View style={styles.cardsContainer}>
                    <TouchableOpacity
                        style={[
                            styles.card,
                            selectedMoment === "지난 순간에 느꼈던 감정" && styles.selectedCard
                        ]}
                        onPress={() => handleSelect("지난 순간에 느꼈던 감정")}
                    >
                        <View className="flex-row justify-between items-center mb-1">
                            <Text
                                style={[
                                    styles.cardTitle,
                                    selectedMoment === "지난 순간에 느꼈던 감정" && styles.selectedText
                                ]}
                            >
                                지난 순간에 느꼈던 감정
                            </Text>
                            {selectedMoment === "지난 순간에 느꼈던 감정" && (
                                <View style={styles.checkmark}>
                                    <Text style={styles.checkmarkText}>✓</Text>
                                </View>
                            )}
                        </View>
                        <View className="flex-row items-center">
                            <Text className="text-gray-500 text-sm ml-1">오후 12:00</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.card,
                            selectedMoment === "하루 동안의 전반적인 기분" && styles.selectedCard
                        ]}
                        onPress={() => handleSelect("하루 동안의 전반적인 기분")}
                    >
                        <View className="flex-row justify-between items-center mb-1">
                            <Text
                                style={[
                                    styles.cardTitle,
                                    selectedMoment === "하루 동안의 전반적인 기분" && styles.selectedText
                                ]}
                            >
                                하루 동안의 전반적인 기분
                            </Text>
                            {selectedMoment === "하루 동안의 전반적인 기분" && (
                                <View style={styles.checkmark}>
                                    <Text style={styles.checkmarkText}>✓</Text>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="px-4 pb-8">
                <Button
                    label="다음"
                    onPress={isButtonEnabled ? handleNext : () => { }}
                    style={[
                        PALETTE[emotion].BUTTON
                    ]}
                    activeOpacity={isButtonEnabled ? 0.8 : 1}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    content: {
        flex: 1,
    },
    textContainer: {
        marginTop: 80,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    cardsContainer: {
        paddingHorizontal: 20,
        marginTop: 60,
        gap: 16,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    selectedCard: {
        backgroundColor: "#F0F7FF",
        borderColor: "#3B82F6",
        borderWidth: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000",
        marginBottom: 4,
    },
    selectedText: {
        color: "#3B82F6",
    },
    checkmark: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "#3B82F6",
        justifyContent: "center",
        alignItems: "center",
    },
    checkmarkText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    greetingStyle: {
        fontSize: 28,
        fontWeight: "700",
        color: "#000",
    },
    dayStyle: {
        fontSize: 24,
        fontWeight: "600",
        color: "#000",
        marginTop: 8,
        opacity: 0.8,
    }
})