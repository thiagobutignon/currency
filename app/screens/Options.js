import React, { Component } from "react";
import { ScrollView, StatusBar, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ListItem, Separator } from "../components/List";

// o icon_prefix o prefixo de acordo com a plataforma.
// Essa logica está escrita da seguinte maneira:
// variavel icon_prefix é igual a plataform.os(seleciona plataforma)
// se a plataforma for estritamente igual a ios, então ele retornará ios
// caso não seja ios, irá retornar md, prefixo utilizado no android.
const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Options extends Component {
  handleThemePress = () => {
    console.log("voce clickou no tema");
  };

  handleSitePress = () => {
    console.log("voce clickou no site");
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
          text="Site"
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
