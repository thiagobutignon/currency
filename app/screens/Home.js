import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";

import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Button";
import { LastConverted } from "../components/Text";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "50";
const TEMP_CONVERSION_RATE = Number(TEMP_BASE_PRICE) / Number(TEMP_QUOTE_PRICE);
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  handleChangeText = () => {
    console.log("change text");
  };

  handlePressBaseCurrency = () => {
    console.log("press base currency");
  };

  handlePressQuoteCurrency = () => {
    console.log("press quote currency");
  };

  handleSwapCurrency = () => {
    console.log("handle swap currency");
  };

  handleOptionsPress = () => {
    console.log("voce apertou a funcao do header");
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView>
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            editable={false}
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            onPress={this.handleSwapCurrency}
            text="Reverse Currencies"
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
