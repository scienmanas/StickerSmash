const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.scienmanas.stickersmash.dev';
  }

  if (IS_PREVIEW) {
    return 'com.scienmanas.stickersmash.preview';
  }

  return 'com.scienmanas.stickersmash';
}

const getAppName = () => {
  if (IS_DEV) {
    return 'StickerSmash (Dev)';
  }

  if (IS_PREVIEW) {
    return 'StickerSmash (Preview)';
  }
  return 'StickerSmash: Emoji Stickers';
}

export default ({ config }) => ({
  ...config,
  name: getAppName(),
  slug: "StickerSmash",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#25292e"
    },
    package: getUniqueIdentifier()
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    eas: {
      projectId: "e6581611-1a9a-4f38-9d92-e79aa2db6fe8"
    }
  },
  owner: "scienmanas"
});
