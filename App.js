import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import PlaceholderImage from './assets/images/background-image.png';
import { useState } from 'react';

// Import custom components
import ImageViewer from './components/ImageViewer';
import Button from './components/Buttons';

// Library imports
import * as ImagePicker from 'expo-image-picker';

// This also can be used to import
// const PlaceholderImage = require('./assets/images/background-image.png');


export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  // Image picker
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowOptions(true);
    }
    else {
      alert("You did not select any image :| .")
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {
        showOptions ? (
          <View />
        ) :
          (
            <View style={styles.footerContainer}>
              <Button label={`Choose a photo`} theme="primary" onPress={pickImageAsync} />
              <Button label={`Use this photo`} theme="no" onPress={() => setShowOptions(true)} />
            </View>
          )
      }
      {/* <Text style={{ color: '#fff' }}>
        Hello World !
      </Text> */}
      {/* This status sets same color to the background of the view */}
      <StatusBar style="auto" />
    </View>
  );
}

// To Note: container is just a name you can use other things too 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
