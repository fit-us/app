import EmotionSummaryContainer from "@/app/components/EmotionSummaryContainer"
import { ImageBackground } from "expo-image"
import { router } from "expo-router"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Home() {
  const exampleContainerProps = {
    date: "3월 31일",
    dayEmotions: ["외로움", "지침", "거슬림"],
    dayEmotionSummary: "약간 불쾌함",
    dayEmotionPlace: "GS25 대구대현점",
    dayEmotionDescription: "진상손님이 짜증나게 함",
    dayEmotionImage: require("@/app/assets/0.png"),
  }

  return (
    <ImageBackground source={require("@/app/assets/bgImage.png")} style={{ flex: 1 }} >
      <SafeAreaView className="flex-1 items-center justify-center px-6">
        <ScrollView className="w-full">
          <EmotionSummaryContainer {...exampleContainerProps} />
        </ScrollView>
        <View className="flex-1 flex-row justify-around gap-6 px-2">
          <TouchableOpacity className="flex-1 bg-white border border-purple-400 h-14 rounded-full justify-center" >
            <Text className="text-xl font-bold text-black text-center">감정기록 차트</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-main rounded-full  h-14 justify-center" onPress={() => router.push("/screens/form-register-emotion")}>
            <Text className="text-xl text-white font-bold text-center">기록</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}