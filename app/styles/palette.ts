export const PALETTE = [
    {
        BACKGROUND_COLOR: ["rgba(0, 0, 255, 0.24)", "rgba(201, 196, 242, 0.60)"] as const,
        IMAGE: require("@/app/assets/0.png"),
        SMALL_IMAGE: require("@/app/assets/small/small_veryUnpleasant.png"),
        STYLE: {
            width: 266,
            height: 75,
            objectFit: "contain" as const,
        },
        BUTTON: {
            backgroundColor: "#0000ff" as const,
        }
    }, // 매우 불쾌함
    {
        BACKGROUND_COLOR: ["rgba(58,83,255,0.24)", "rgba(201,196,242,0.60)"] as const,
        IMAGE: require("@/app/assets/1.png"),
        SMALL_IMAGE: require("@/app/assets/small/small_unpleasant.png"),
        STYLE: {
            width: 266,
            height: 266,
            objectFit: "contain" as const,
        },
        BUTTON: {
            backgroundColor: "#3a53ff" as const,
        }
    }, // 불쾌함
    {
        BACKGROUND_COLOR: ["rgba(0, 0, 255, 0.24)", "rgba(201, 196, 242, 0.60)"] as const,
        IMAGE: require("@/app/assets/2.png"),
        SMALL_IMAGE: require("@/app/assets/small/small_littleUnpleasant.png"),
        STYLE: {
            width: 266,
            height: 266,
            objectFit: "contain" as const,
        },
        BUTTON: {
            backgroundColor: "#694dff" as const,
        }
    }, // 약간 불쾌함
    {
        BACKGROUND_COLOR: ["rgba(135, 73, 235, 0.24)", "rgba(201, 196, 242, 0.60)"] as const,
        IMAGE: require("@/app/assets/3.png"),
        SMALL_IMAGE: require("@/app/assets/small/small_normal.png"),
        STYLE: {
            width: 266,
            height: 266,
            objectFit: "contain" as const,
        },
        BUTTON: {
            backgroundColor: "#8749eb" as const,
        }
    }, // 보통
    {
        BACKGROUND_COLOR: ["rgba(180, 73, 235, 0.24)", "rgba(201, 196, 242, 0.60)"] as const,
        IMAGE: require("@/app/assets/4.png"),
        SMALL_IMAGE: require("@/app/assets/small/small_littlePleasant.png"),
        STYLE: {
            width: 266,
            height: 266,
            objectFit: "contain" as const,
        },
        BUTTON: {
            backgroundColor: "#b449eb" as const,
        }
    }, // 약간 기분 좋음
    {
        BACKGROUND_COLOR: ["rgba(225, 73, 235, 0.24)", "rgba(201, 196, 242, 0.60)"] as const,
        IMAGE: require("@/app/assets/5.png"),
        SMALL_IMAGE: require("@/app/assets/small/small_pleasant.png"),
        STYLE: {
            width: 266,
            height: 266,
            objectFit: "contain" as const,
        },
        BUTTON: {
            backgroundColor: "#e149eb" as const,
        }
    }, // 기분 좋음
    {
        BACKGROUND_COLOR: ["rgba(255, 73, 255, 0.12)", "rgba(201, 196, 242, 0.60)"] as const,
        IMAGE: require("@/app/assets/6.png"),
        SMALL_IMAGE: require("@/app/assets/small/small_veryPleasant.png"),
        STYLE: {
            width: 266,
            height: 266,
            objectFit: "contain" as const,
        },
        BUTTON: {
            backgroundColor: "#ff49ff" as const,
        }
    }, // 매우 기분 좋음
]