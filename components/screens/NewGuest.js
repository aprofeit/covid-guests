import React, { useState } from 'react';
import { View } from 'react-native';
import { Image, Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Button, Divider, Input, Layout, Text } from '@ui-kitten/components';

export default function NewGuest() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let emailInput, phoneInput;

  const submitForm = () => {
    clearForm();
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    Keyboard.dismiss();
  }

  return (
    <Layout style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <Text category='h1' style={{ padding: 18 }}>Welcome</Text>

          <Image source={require('../../assets/background.jpg')} style={{ width: '100%', flex: 1 }} />
        </View>
      </TouchableWithoutFeedback>

      <Layout style={{ padding: 18 }}>
        <Input
          autoCapitalize="words"
          autoCompleteType="name"
          clearButtonMode="while-editing"
          placeholder="Name"
          size="large"
          autoCorrect={false}
          blurOnSubmit={false}
          style={styles.input}
          value={name}
          onChangeText={nextValue => setName(nextValue)}
          onSubmitEditing={() => { emailInput.focus() }}
        />

        <Input
          autoCapitalize="none"
          autoCompleteType="email"
          clearButtonMode="while-editing"
          keyboardType="email-address"
          placeholder="Email"
          size="large"
          autoCorrect={false}
          blurOnSubmit={false}
          style={styles.input}
          value={email}
          onChangeText={nextValue => setEmail(nextValue)}
          onSubmitEditing={() => { phoneInput.focus() }}
          ref={(input) => { emailInput = input; }}
        />

        <Input
          autoCompleteType="tel"
          clearButtonMode="while-editing"
          keyboardType="phone-pad"
          placeholder="Phone Number"
          size="large"
          autoCorrect={false}
          style={styles.input}
          value={phone}
          onChangeText={nextValue => setPhone(nextValue)}
          ref={(input) => { phoneInput = input; }}
        />

        <Button size="large" onPress={() => submitForm()}>Submit</Button>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 14,
  },
});
