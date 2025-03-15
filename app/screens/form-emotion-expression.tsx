import Button from "@/app/components/Button";
import ExpressionBox from "@/app/components/ExpressionBox";
import { useEmotion } from "@/app/EmotionContext";
import { PALETTE } from "@/app/styles/palette";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function EmotionExpress() {
    const { emotion, emotionText, setExpressions } = useEmotion();
    const [selectedExpressions, setSelectedExpressions] = useState<string[]>([]);

    const handleNext = () => {
        setExpressions(selectedExpressions);
        router.push("/screens/form-screen");
    };

    const expressions = [
        "감탄스러움", "신남", "놀람", "열정적인", "행복함",
        "기쁨", "대단함", "자랑스러움", "자신 있음",
        "희망적인", "재미있음", "안도감", "감사함",
        "충족감을 느낌", "차분함", "평온함"
    ];

    const handleExpressionSelect = (expression: string) => {
        setSelectedExpressions(prev => {
            if (prev.includes(expression)) {
                return prev.filter(expr => expr !== expression);
            } else {
                return [...prev, expression];
            }
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{
                headerTransparent: true,
                headerTitle: "",
                headerTitleAlign: "center",
                headerShadowVisible: false,
            }} />
            <LinearGradient colors={PALETTE[emotion].BACKGROUND_COLOR} style={styles.background} />
            <View className="flex-1 px-4 ">
                <View className="flex-1 justify-center items-center pt-8">
                    <Image
                        style={PALETTE[emotion].STYLE}
                        source={PALETTE[emotion].IMAGE}
                    />
                </View>
                <View className="flex-1 justify-center content-center">
                    <Text className="text-3xl font-semibold text-center">{emotionText}</Text>
                </View>
                <View className="mb-6">
                    <Text className="text-base mb-2">이 감정을 가장 잘 나타내는 표현은 무엇인가요?</Text>
                    <View className="border-b border-b-black" />
                </View>

                <View className="flex-row flex-wrap justify-center gap-2 mb-6">
                    {expressions.map((expr, index) => (
                        <ExpressionBox
                            key={index}
                            label={expr}
                            onPress={() => handleExpressionSelect(expr)}
                            selected={selectedExpressions.includes(expr)} // 배열에 포함되어 있는지 확인
                        // style={styles.expressionBox}
                        />
                    ))}
                </View>

                <View className="items-center mb-4">
                    <View className="flex-row items-center">
                        <Text className="text-base">더 보기</Text>
                        <Text className="text-xl ml-1">›</Text>
                    </View>
                </View>
            </View>

            <View className="px-4 pb-8">
                <Button
                    onPress={handleNext}
                    label="다음"
                    style={PALETTE[emotion].BUTTON}
                    activeOpacity={0.8}
                />
            </View>
        </SafeAreaView>
    );
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
    expressionBox: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginBottom: 8,
    }
});