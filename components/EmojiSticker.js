import { View, Image } from "react-native";

export default function EmojiSticker({ imageSize, stickerSource }) {
    return (
        <View style={{ top: -350 }}>
            <Image
                source={stickerSource}
                resizeMode="contain" // Image will ne cut and aspect ratio will be maintained
                style={{ width: imageSize, height: imageSize }}
            />
        </View>
    )
}