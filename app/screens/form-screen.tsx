import Button from "@/app/components/Button"
import { Image } from "expo-image"
import { LinearGradient } from "expo-linear-gradient"
import { router, Stack } from "expo-router"
import {
    View,
    Text,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native"
import { useEmotion } from "@/app/EmotionContext"
import { PALETTE } from "@/app/styles/palette"
import { useState } from "react"
import { Emotion } from "@/app/types/emotion"
import AsyncStorage from "@react-native-async-storage/async-storage"
import dayjs from "dayjs"

export default function FormScreen() {
    const { emotion, emotionText, expressions, setEmotion, setMoment, setExpressions } = useEmotion()
    const [place, setPlace] = useState("")
    const [description, setDescription] = useState("")

    const day = dayjs()
    const dayTransformer = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
    const now = day.get('hour') + "시" + day.get("minute") + "분"
    // day.get("M") + 1 + "월 " + day.get("D") + "일 " + dayTransformer[day.get("d")]
    const saveEmotion = async (newEmotion: Emotion) => {
        try {
            const existingEmotions = await getExistEmotion();
            const appendEmotion = [...existingEmotions, newEmotion]
            AsyncStorage.setItem('emotions', JSON.stringify(appendEmotion))
        } catch (e) {
            console.log("er")
        }

    }
    const getExistEmotion = async (): Promise<Emotion[]> => {
        try {
            const getExistEmotionJson = await AsyncStorage.getItem('emotions')
            return getExistEmotionJson !== null ? JSON.parse(getExistEmotionJson) : []
        } catch (e) {
            console.error("잘못된 요청입니다.")
            return [];
        }
    }

    const handleNext = async () => {
        submitEmotion();
        setEmotion(0)
        setMoment("")
        setExpressions([])
        router.replace("/App")
    }

    const changePlace = (place: string) => {
        setPlace(place)
    }

    const changeDescription = (desc: string) => {
        setDescription(desc)
    }

    const submitEmotion = async () => {
        const newEmotion: Emotion = {
            emotion,
            emotionText,
            emotionPlace: place,
            emotionDescription: description,
            expressions,
            timeStamp: now
        };

        await saveEmotion(newEmotion)
    }

    return (
        <SafeAreaView className="flex-1">
            <LinearGradient colors={PALETTE[emotion].BACKGROUND_COLOR} style={styles.background} />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
                <ScrollView className="flex-1 px-4">
                    <View className="items-center my-6">
                        <View style={styles.imageContainer}>
                            <Image style={[PALETTE[emotion].STYLE, styles.emotionImage]} source={PALETTE[emotion].IMAGE} />
                        </View>
                        <Text className="text-2xl font-bold mt-3 pb-2">{emotionText}</Text>
                        <View className="flex-1 flex-row flex-wrap gap-2 justify-center ">
                            {expressions.map(e => (
                                <Text key={e} className="text-sm text-gray-600 font-medium">{e}</Text>
                            ))}
                        </View>
                    </View>

                    <View className="mb-6">
                        <Text className="text-base mb-2">이 감정에 영향을 미친 요인은 무엇인가요?</Text>
                        <View className="border-b border-b-black" />
                    </View>

                    <View className="mb-6">
                        <Text style={styles.textStyle} className="py-2">
                            어떤 장소에서 이 감정을 느꼈나요?
                        </Text>
                        <TextInput placeholder="장소를 입력해보세요" style={styles.textInputStyle} className="p-3" value={place} onChangeText={changePlace} />
                    </View>

                    <View className="mb-20">
                        <Text style={styles.textStyle} className="py-2">
                            상황은 어땠나요?
                        </Text>
                        <TextInput
                            style={[styles.textInputStyle, { height: 120 }]}
                            className="p-3"
                            placeholder="상황을 입력하면 OO(팀 이름)이 키워드를 분석하여 기분에 영향을 미친 요인을 구체적으로 보여줄거에요!"
                            multiline
                            textAlignVertical="top"
                            value={description}
                            onChangeText={changeDescription}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <View className="px-4 pb-8">
                <Button onPress={handleNext} label="기록하기" style={PALETTE[emotion].BUTTON} activeOpacity={0.8} />
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
    keyboardView: {
        flex: 1,
    },
    imageContainer: {
        height: 266,
        width: 266,
        justifyContent: "center",
        alignItems: "center",
    },
    emotionImage: {
        alignSelf: "center",
    },
    textInputStyle: {
        borderRadius: 12,
        backgroundColor: "rgba(0, 0, 0, 0.06)",
        flex: 1,
        width: "100%",
        fontSize: 14,
        color: "#58515b",
        textAlign: "left",
    },
    textStyle: {
        fontSize: 14,
        color: "#58515b",
        textAlign: "left",
    },
})

