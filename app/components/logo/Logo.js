import React, { Component } from "react";
import { View, Text, Platform, Keyboard, Animated } from "react-native";

import styles from "./styles";

//  Duração da animação
const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    // let é uma variavel local
    // No android a animação do componente do teclado é keyboardDidShow e KeyboardDidHide.
    // No ios a animação do componente do teclado é keyboardWillShow e KeyboardWillHide.
    let showListener = "keyboardWillShow";
    let hideListener = "keyboardWillHide";
    if (Platform.OS === "android") {
      showListener = "keyboardDidShow";
      hideListener = "keyboardDidHide";
    }
    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide
    );
  }
  componentWillUnmount() {
    this.keyboardShowListener();
    this.keyboardHideListener();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth }
    ];

    const imageLogo = [styles.logo, { width: this.imageWidth }];
    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={containerImageStyle}
          source={require("./images/background.png")}
        >
          <Animated.Image
            resizeMode="contain"
            style={imageLogo}
            source={require("./images/logo.png")}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
