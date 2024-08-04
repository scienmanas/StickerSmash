import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    // uri explicity written as it is a uri not directimport 
    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource

    return (
        <Image
            source={imageSource}
            style={styles.image}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});