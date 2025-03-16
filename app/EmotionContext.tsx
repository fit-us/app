import { createContext, useState, useContext, ReactNode } from "react";

export type EmotionContextType = {
    emotion: number;
    setEmotion: (value: number) => void;
    emotionText: string;
    getEmotionText: (value: number) => string;
    expressions: string[];
    setExpressions: (value: string[]) => void
};

export const EmotionContext = createContext<EmotionContextType | undefined>(undefined);

const getEmotionTextHelper = (value: number): string => {
    switch (value) {
        case 0: return "매우 불쾌함";
        case 1: return "불쾌함";
        case 2: return "약간 불쾌함";
        case 3: return "보통";
        case 4: return "약간 기분좋음";
        case 5: return "기분좋음";
        case 6: return "매우 기분좋음";
        default: return "";
    }
};


export const EmotionProvider = ({ children }: { children: ReactNode }) => {
    const [emotion, setEmotion] = useState<number>(0);

    const [expressions, setExpressions] = useState<string[]>([])
    const emotionText = getEmotionTextHelper(emotion);

    const contextValue = {
        emotion,
        setEmotion,
        emotionText,
        getEmotionText: getEmotionTextHelper,
        expressions,
        setExpressions,
    };

    return (
        <EmotionContext.Provider value={contextValue}>
            {children}
        </EmotionContext.Provider>
    );
};

export const useEmotion = () => {
    const context = useContext(EmotionContext);
    if (context === undefined) {
        throw new Error('useEmotion must be used within an EmotionProvider');
    }
    return context;
};