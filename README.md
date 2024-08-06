<div align="center">
  <img src="https://github.com/user-attachments/assets/efc2070c-432c-4fc0-bf2a-4f9525d06316" alt="Logo">
</div>

# 🔰 StickerSmash

- A mobile-app in which allows you to choose a picture and add emojis to it. Additionally the picture can also be saved on the device.

- Web build deployed on `vercel` under free tier [Link](https://sticker-smash-one.vercel.app/).

## 📚 Tech Stack

- React Native and its native libraries.


## 🔩 Environment Variables

- The environment variables are configured in `eas.json` file


## 🔨 Setting Up

Follow the following instruction to setup the project and run locally

- Run `npm install` to install all the dependencies.
- Run `npm run dev` to start the development server.
- To make a local build run `eas build --platform android --local`.
- To make a web build run `npx expo export -p web` and the build files will be generated in the `dist` folder.
- Test web build by `npx serve dist --single`.

## ⚡ Features

- Choose a picture from the gallery.
- Add emojis to the picture.
- Save the picture on the device. (really cool and funny)

## 📁 File Structure :

```
.
├── assets
│   │── images
│   │   └── ... images used in the app
│   │── favicon.png
│   │── splash.png
│   │── icon.png
│   └── adaptive-icon.png
├── components
│   │── Button.js
│   │── CircleButton.js
│   │── EmojiList.js
│   │── EmojiPicker.js
│   │── EmojiSticker.js
│   │── IconButton.js
│   └── ImageViewer.js
├── dist
│   └── ... build files for web deplo1yment
├── App.js
├── babel.config.js
├── eas.json
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```


## 🔥 Contributing

This app was made to pracice react native by following documentation, though contributions are always welcome! Additionally you can contact me by my email: **iamscientistmanas@gmail.com**. Some features which are developmemt and contributions can be made are:


## 📷 Screenshots

