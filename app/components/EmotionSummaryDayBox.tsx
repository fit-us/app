import { View, Text, StyleSheet } from "react-native"
import type { Emotion } from "@/app/types/emotion"
import { Image } from "expo-image"
import { PALETTE } from "@/app/styles/palette"

const EmotionSummaryDayBox = ({
    emotion,
    emotionText,
    emotionPlace,
    emotionDescription,
    expressions,
    timeStamp,
}: Emotion) => {
    return (
        <View className="bg-none p-5 flex-row justify-between">
            <View className="justify-center">
                <View className="w-15 h-15 relative">
                    <Image source={PALETTE[emotion].SMALL_IMAGE} style={styles.imageStyle} />
                </View>
            </View>
            <View className="flex-1 ml-4">
                <View className="flex-row justify-between items-center">
                    <View className="flex-row flex-wrap">
                        {expressions.map((exp, index) => (
                            <Text key={exp} className="text-md font-bold px-3">
                                {exp}
                                {index < expressions.length - 1 ? ", " : ""}
                            </Text>
                        ))}
                    </View>
                    <Text className="text-sm text-gray-400">{timeStamp}</Text>
                </View>
                <View className="px-3">
                    <Text className="text-sm text-gray-600 ">{emotionText}</Text>
                    <Text className="text-base text-gray-600">{emotionPlace}</Text>
                    <Text className="text-sm text-gray-500">{emotionDescription}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 80,
        height: 80,
    },
})

export default EmotionSummaryDayBox


