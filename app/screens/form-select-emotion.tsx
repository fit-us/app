import { Image } from "expo-image"
import { LinearGradient } from "expo-linear-gradient"
import { router, Stack } from "expo-router"
import { Text, View, StyleSheet, TouchableOpacity, Animated } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Slider from "@react-native-community/slider"
import { useEmotion } from "@/app/EmotionContext"
import { PALETTE } from "@/app/styles/palette"
import { useRef, useState, useEffect } from "react"

export default function SelectEmotion() {
    const { emotion, setEmotion, emotionText, moment } = useEmotion()

    const animatedValue = useRef(new Animated.Value(emotion)).current
    const animatedScale = useRef(new Animated.Value(emotion)).current
    const [displayEmotion, setDisplayEmotion] = useState(emotion)
    const [prevEmotion, setPrevEmotion] = useState(emotion)
    const [nextEmotion, setNextEmotion] = useState(emotion)
    const backgroundInterpolation = useRef(new Animated.Value(0)).current
    const imageOpacity = useRef(new Animated.Value(1)).current

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: emotion,
            duration: 150,
            useNativeDriver: false,
        }).start()

        Animated.timing(animatedScale, {
            toValue: emotion,
            duration: 150,
            useNativeDriver: true,
        }).start()

        Animated.timing(imageOpacity, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
        }).start(() => {
            setDisplayEmotion(emotion)

            Animated.timing(imageOpacity, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }).start()
        })
        if (prevEmotion !== emotion) {
            setNextEmotion(emotion)
            backgroundInterpolation.setValue(0)

            Animated.timing(backgroundInterpolation, {
                toValue: 1,
                duration: 150,
                useNativeDriver: false,
            }).start(() => {
                setPrevEmotion(emotion)
            })
        }
    }, [emotion])

    const handleNext = () => {
        router.push("/screens/form-emotion-expression")
    }

    const handleValueChange = (newValue: number) => {
        setEmotion(Math.round(newValue))
    }

    const imageScale = animatedScale.interpolate({
        inputRange: [0, 1, 2, 3, 4, 5, 6],
        outputRange: [1, 1.02, 1.04, 1.06, 1.04, 1.02, 1],
    })

    const gradientColors = PALETTE.map((p) => p.BACKGROUND_COLOR)

    const startColor = backgroundInterpolation.interpolate({
        inputRange: [0, 1],
        outputRange: [gradientColors[prevEmotion][0], gradientColors[nextEmotion][0]],
    })

    const endColor = backgroundInterpolation.interpolate({
        inputRange: [0, 1],
        outputRange: [
            gradientColors[prevEmotion][1] || gradientColors[prevEmotion][0],
            gradientColors[nextEmotion][1] || gradientColors[nextEmotion][0],
        ],
    })

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.background]}>
                <AnimatedGradient colors={[startColor, endColor]} style={styles.background} />
            </Animated.View>
            <View className="flex-1 flex-col justify-around px-4 pt-28">
                <View className="items-center">
                    <Text className="text-2xl font-bold">{moment}</Text>
                    <Text className="text-2xl font-bold">감정을 선택해보세요</Text>
                </View>

                <View className="flex-1 justify-center items-center pt-8">
                    <Animated.View style={{ opacity: imageOpacity, transform: [{ scale: imageScale }] }}>
                        <Image style={PALETTE[displayEmotion].STYLE} source={PALETTE[displayEmotion].IMAGE} />
                    </Animated.View>
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
                <Animated.View style={{ borderRadius: 9999 }}>
                    <TouchableOpacity
                        onPress={handleNext}
                        className="rounded-full py-4 items-center"
                        style={PALETTE[emotion].BUTTON}
                    >
                        <Text className="text-white text-base font-medium">다음</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    )
}

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient)

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
        justifyContent: "center",
    },
    button: {
        width: "100%",
    },
})