import type React from "react"
import { View, Text } from "react-native"
import BioDashboardItem from "@/app/components/BioDashboardItem"
import { SafeAreaView } from "react-native-safe-area-context"
import BioScore from "@/app/components/BioScore"

type BioDashboardDataType = {
    happinessScore: number
    heartRate: {
        value: number
        unit: string
        time: string
        status: "최근" | "평균" | "최고" | "최저"
    }
    ecg: {
        value: number
        unit: string
        time: string
        status: "최근" | "평균" | "최고" | "최저"
    }
    respiratoryRate: {
        value: number
        unit: string
        time: string
        status: "최근" | "평균" | "최고" | "최저"
    }
    oxygenSaturation: {
        value: number
        unit: string
        time: string
        status: "최근" | "평균" | "최고" | "최저"
    }
    maxOxygenIntake: {
        value: number
        unit: string
        time: string
        status: "최근" | "평균" | "최고" | "최저"
    }
}

type BioDashboardType = {
    data: BioDashboardDataType
    icons?: {
        heartRate?: any
        ecg?: any
        respiratoryRate?: any
        oxygenSaturation?: any
        maxOxygenIntake?: any
    }
}

const BioDashboard = ({ data }: BioDashboardType) => {
    return (
        <SafeAreaView className="bg-white rounded-3xl p-5 mx-4 shadow-sm">
            <BioScore score={57} />
            <View className="h-[1px] bg-gray-200" />
            <Text className="text-base text-gray-500 mb-6 pt-4 text-center">실시간 바이오데이터</Text>

            <BioDashboardItem
                icon={require("@/app/assets/bioIcon/mdi_heart.png")}
                iconStyle={{ width: 20, height: 20 }}
                title="심박수"
                status={data.heartRate.status}
                value={data.heartRate.value}
                unit={data.heartRate.unit}
                time={data.heartRate.time}
                color="text-fuchsia-500"
                placeholder={<View className="w-6 h-6 mr-4 bg-pink-100 rounded-full" />}
            />

            <BioDashboardItem
                icon={require("@/app/assets/bioIcon/Monitor_heart.png")}
                iconStyle={{ width: 20, height: 20 }}
                title="심전도"
                status={data.ecg.status}
                value={data.ecg.value}
                unit={data.ecg.unit}
                time={data.ecg.time}
                color="text-fuchsia-500"
                placeholder={<View className="w-6 h-6 mr-4 bg-blue-100 rounded-full" />}
            />

            <BioDashboardItem
                icon={require("@/app/assets/bioIcon/bi_lungs-fill.png")}
                iconStyle={{ width: 18, height: 18 }}
                title="호흡수"
                status={data.respiratoryRate.status}
                value={data.respiratoryRate.value}
                unit={data.respiratoryRate.unit}
                time={data.respiratoryRate.time}
                color="text-blue-600"
                placeholder={<View className="w-6 h-6 mr-4 bg-indigo-100 rounded-full" />}
            />

            <BioDashboardItem
                icon={require("@/app/assets/bioIcon/ph_person-fill.png")}
                iconStyle={{ width: 20, height: 20 }}
                title="산소포화도"
                status={data.oxygenSaturation.status}
                value={data.oxygenSaturation.value}
                unit={data.oxygenSaturation.unit}
                time={data.oxygenSaturation.time}
                color="text-blue-600"
                placeholder={<View className="w-6 h-6 mr-4 bg-blue-100 rounded-full" />}
            />

            <BioDashboardItem
                icon={require("@/app/assets/bioIcon/f7_smoke-fill.png")}
                iconStyle={{ width: 20, height: 20 }}
                title="최대 산소 섭취량"
                status={data.maxOxygenIntake.status}
                value={data.maxOxygenIntake.value}
                unit={data.maxOxygenIntake.unit}
                time={data.maxOxygenIntake.time}
                color="text-blue-600"
            />
        </SafeAreaView>
    )
}

export default BioDashboard