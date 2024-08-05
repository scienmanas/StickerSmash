import { View, Image } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function EmojiSticker({ imageSize, stickerSource }) {

    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const imagestyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });
    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value = scaleImage.value * 2
            }
        })

    const onDrag = Gesture.Pan()
        .onChange((event) => {
            translateX.value += event.changeX;
            translateY.value += event.changeY;
        })


    return (
        <GestureDetector gesture={onDrag}>
            <Animated.View style={[containerStyle, { top: -350 }]}>
                {/* <Image
                source={stickerSource}
                resizeMode="contain" // Image will ne cut and aspect ratio will be maintained
                style={{ width: imageSize, height: imageSize }}
                /> */}
                <GestureDetector gesture={doubleTap} >
                    <Animated.Image
                        source={stickerSource}
                        resizeMode="contain"
                        style={[imagestyle, { width: imageSize, height: imageSize }]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    )
}