import { Pressable, Text, View } from "react-native";

export default function Yaho() {
  return (
    <View className="w-full min-h-screen bg-slate-800">
      <Text className="text-pink-500">YAHO</Text>
      <Pressable className="w-full h-[100px] rounded-md bg-pink-300 ">
        <Text className="text-white">PressS!</Text>
      </Pressable>
    </View>
  );
}
