import { Text, Pressable, View } from "react-native";

type ExpressionType = {
    label: string;
    onPress?: () => void;
    selected?: boolean;
}

const ExpressionBox = ({ label, onPress, selected = false }: ExpressionType) => {
    return (
        <Pressable
            onPress={onPress}
            className="active:opacity-80"
        >
            <View
                className={`bg-white px-4 py-2 rounded-full 
                    border ${selected ? "border-black" : "border-transparent"} 
                    items-center justify-center`}
            >
                <Text className="text-black font-semibold text-sm">{label}</Text>
            </View>
        </Pressable>
    );
};

export default ExpressionBox;
