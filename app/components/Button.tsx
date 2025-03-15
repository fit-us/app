import { TouchableOpacity, Text, ViewStyle } from "react-native";

type ButtonType = {
    label: string;
    onPress: () => void;
    style?: ViewStyle | ViewStyle[]
    activeOpacity?: number;
}

const Button = ({ onPress, label, style, activeOpacity = 0.8 }: ButtonType) => {
    return (
        <TouchableOpacity
            style={style}
            onPress={onPress}
            className="rounded-full py-4 items-center"
            activeOpacity={activeOpacity}
        >
            <Text className="text-white text-base font-medium">{label}</Text>
        </TouchableOpacity>
    )
}


export default Button;