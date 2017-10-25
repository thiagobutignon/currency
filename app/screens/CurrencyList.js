import React, { Component } from "react";
import { Text, FlatList, View, StatusBar } from "react-native";
import currencies from "../data/currencies";
import { ListItem, Separator } from "../components/List";

const TEMP_CURRENT_CURRENCY = "BRL";

class CurrencyList extends Component {
  handlePress = () => {
    console.log("row pressionada");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          /* Render Item renderiza um componente dentro de uma lista de um array, json, etc... */
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          /* Keyextractor é responsavel por retirar o erro do renderItem 
            e também especificar o tipo de dado que está sendo retirardo, 
            caso esteja conectado ao uma API, o keyextractor é o respnnsavel 
            pela autenticação. */
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
