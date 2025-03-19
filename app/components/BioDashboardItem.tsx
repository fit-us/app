import { ImageStyle } from "expo-image";
import { View, Text, Image } from "react-native"

interface BioDashboardItemType {
    icon: any;
    iconStyle: ImageStyle
    title: string
    status: string
    value: number
    unit: string
    time: string
    color: string
    placeholder?: React.ReactNode
}

const BioDashboardItem = ({
    icon,
    iconStyle,
    title,
    status,
    value,
    unit,
    time,
    color,
    placeholder
}: BioDashboardItemType) => {
    return (
        <>
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                    <Image source={icon} style={iconStyle} />
                    <View className="mx-4">
                        <Text className={`text-base font-medium ${color}`}>{title}</Text>
                        <Text className="text-sm text-gray-500 mt-0.5">{status}</Text>
                        <Text className="text-3xl font-bold mt-0.5">
                            {value}
                            <Text className="text-base font-normal text-gray-500">{unit}</Text>
                        </Text>
                    </View>
                </View>
                <Text className="text-sm text-gray-500">{time}</Text>
            </View>
            <View className="h-[1px] bg-gray-200 my-4" />
        </>
    )
}

export default BioDashboardItem