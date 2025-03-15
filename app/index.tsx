import { Link } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      < Text className="text-xl mb-4" > 홈 화면</Text >
      <Link href="/screens/form-register-emotion" asChild>
        <TouchableOpacity className="bg-main px-6 py-3 rounded-full">
          <Text className="text-white">폼 화면으로 이동</Text>
        </TouchableOpacity>
      </Link>
    </View >
  )
}

