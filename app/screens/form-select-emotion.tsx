import { Image } from "expo-image"
import { LinearGradient } from "expo-linear-gradient"
import { router, Stack } from "expo-router"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Slider from "@react-native-community/slider"
import { useEmotion } from "@/app/EmotionContext"
import { PALETTE } from "@/app/styles/palette"

export default function SelectEmotion() {
    const { emotion, setEmotion, emotionText } = useEmotion();

    const handleNext = () => {
        router.push("/screens/form-emotion-expression")
    }

    const handleValueChange = (newValue: number) => {
        setEmotion(newValue);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={() => router.replace("/")} className="mr-4">
                            <Text className="text-base font-medium text-black">취소</Text>
                        </TouchableOpacity>
                    ),
                    headerTransparent: true,
                    headerTitle: "순간의 감정",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                }}
            />
            <LinearGradient colors={PALETTE[emotion].BACKGROUND_COLOR} style={styles.background} />
            <View className="flex-1 flex-col justify-around px-4 pt-28">
                <View className="items-center">
                    <Text className="text-2xl font-bold">지난 순간에 느꼈던</Text>
                    <Text className="text-2xl font-bold">감정을 선택해보세요</Text>
                </View>

                <View className="flex-1 justify-center items-center pt-8">
                    <Image
                        style={PALETTE[emotion].STYLE}
                        source={PALETTE[emotion].IMAGE}
                    />
                </View>
                <View className="flex-1 justify-center content-center">
                    <Text className="text-3xl font-semibold text-center">{emotionText}</Text>
                </View>
            </View>
            <View className="mb-8 px-4">
                <View style={styles.sliderStyle}>
                    <Slider
                        style={{ width: "100%", height: 60 }}
                        minimumValue={0}
                        maximumValue={6}
                        step={1}
                        value={emotion}
                        onValueChange={handleValueChange}
                        thumbTintColor="#FFFFFF"
                        minimumTrackTintColor="rgba(0,0,0,0.06)"
                    />
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-sm text-gray-700">매우 불쾌함</Text>
                    <Text className="text-sm text-gray-700">매우 기분 좋음</Text>
                </View>
            </View>
            <View className="px-4 pb-8">
                <TouchableOpacity
                    onPress={handleNext}
                    className="rounded-full py-4 items-center"
                    style={PALETTE[emotion].BUTTON}
                >
                    <Text className="text-white text-base font-medium">다음</Text>
                </TouchableOpacity>
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
    sliderStyle: {
        height: 40,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.06)",
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: "center"
    }
})