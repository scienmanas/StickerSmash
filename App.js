import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import DomToImage from 'dom-to-image';


import PlaceholderImage from './assets/images/background-image.png';

// Import custom components
import ImageViewer from './components/ImageViewer';
import Button from './components/Buttons';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

// Library imports
import * as ImagePicker from 'expo-image-picker';

// This also can be used to import
// const PlaceholderImage = require('./assets/images/background-image.png');


export default function App() {

  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const imageRef = useRef();

  if (status === null) {
    requestPermission();
  }

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


  const onReset = () => {
    setShowOptions(false);
    setSelectedImage(null);
    setPickedEmoji(null);
  };

  const onModelClose = () => {
    setIsModalVisible(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved");
        }
      } catch (e) {
        console.log(e);
      }
    }
    else {
      try {
        const dataUrl = await DomToImage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 400,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.log(error)
      }
    }
  };


  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {
        showOptions ? (
          <View style={styles.optionsContainer} >
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
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
      <EmojiPicker isVisible={isModalVisible} onClose={onModelClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModelClose} />
      </EmojiPicker>
      <StatusBar style="light" />
    </GestureHandlerRootView >
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
