import React, { Component } from "react";
import { ScrollView, StatusBar, Platform, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ListItem, Separator } from "../components/List";
import PropTypes from "prop-types";
import { WebBrowser } from "expo";
// o icon_prefix o prefixo de acordo com a plataforma.
// Essa logica está escrita da seguinte maneira:
// variavel icon_prefix é igual a plataform.os(seleciona plataforma)
// se a plataforma for estritamente igual a ios, então ele retornará ios
// caso não seja ios, irá retornar md, prefixo utilizado no android.
const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Options extends Component {
  static PropTypes = {
    navigation: PropTypes.object
  };
  handleThemePress = () => {
    this.props.navigation.navigate("Themes");
  };

  handleSitePress = () => {
    WebBrowser.openBrowserAsync("http://fixer.io/").catch(() =>
      alert("A url está com um erro")
    );
  };

  handleLinkedin = () => {
    WebBrowser.openBrowserAsync("https://www.linkedin.com/in/thiagobutignon");
  };
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
      </ScrollView>
    );
  }
}

export default Options;
