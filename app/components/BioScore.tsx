import { Text, View } from "react-native"
import { useEffect, useState } from "react"
import Svg, { Path } from "react-native-svg"

interface BioScoreProps {
    score: number
    maxScore?: number
}

const BioScore = ({ score = 40, maxScore = 100 }: BioScoreProps) => {
    const [animatedScore, setAnimatedScore] = useState(0)
    const [animatedFill, setAnimatedFill] = useState(0)

    useEffect(() => {
        setAnimatedScore(0)
        setAnimatedFill(0)

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setAnimatedScore((prev) => {
                    if (prev >= score) {
                        clearInterval(interval)
                        return score
                    }
                    return prev + 1
                })

                setAnimatedFill((prev) => {
                    const target = score / maxScore
                    const step = target / score
                    if (prev >= target) {
                        return target
                    }
                    return prev + step
                })
            }, 10)

            return () => clearInterval(interval)
        }, 300)

        return () => clearTimeout(timer)
    }, [score, maxScore])

    const size = 500
    const strokeWidth = 50
    const radius = (size - strokeWidth) / 2

    const createSemiCirclePath = () => {
        return `M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`
    }

    const createScorePath = (percentage: number) => {
        if (percentage <= 0) return ""

        const startX = strokeWidth / 2
        const startY = size / 2

        if (percentage >= 1) {
            return createSemiCirclePath()
        }

        const angle = percentage * Math.PI
        const endX = size / 2 + radius * Math.cos(Math.PI - angle)
        const endY = size / 2 - radius * Math.sin(Math.PI - angle)
        const largeArcFlag = percentage > 1 ? 1 : 0

        return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`
    }

    return (
        <View className="items-center">
            <Text className="text-center font-semibold text-gray-500">건강점수</Text>
            <View className="w-full items-center justify-center">
                <Svg width={size / 2} height={size / 2} viewBox={`0 0 ${size} ${size}`} style={{ marginTop: 20 }}>
                    <Path
                        d={createSemiCirclePath()}
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />
                    <Path
                        d={createScorePath(animatedFill)}
                        fill="none"
                        stroke="#9333EA"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />
                    <View className="items-center pt-10 my-8 justify-center">
                        <Text className="text-base text-gray-500 text-center">{"어제보다\n행복해보여요!"}</Text>
                        <Text className="text-4xl font-bold mt-1">{animatedScore}점</Text>
                    </View>
                </Svg>
            </View>
        </View>
    )
}

export default BioScore

