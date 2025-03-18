import { View, Text, StyleSheet } from "react-native"
import { Image } from "expo-image"

const NoEmotionSummaryDayBox = () => {
    return (
        <View className="bg-none p-5 flex-row justify-between">
            <View className="justify-center">
                <View className="w-15 h-15 relative">
                    <Image source={require("@/app/assets/no_emotion.png")} style={styles.imageStyle} />
                </View>
            </View>
            <View className="flex-1 ml-4">
                <View className="flex-row justify-between items-center">
                    <View className="flex-row flex-wrap px-3">
                        <Text className="text-md font-bold text-gray-500">
                            입력 항목 없음
                        </Text>
                    </View>
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

export default NoEmotionSummaryDayBox


