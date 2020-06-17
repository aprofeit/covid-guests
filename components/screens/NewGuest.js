import React, { useState } from 'react';
import { View } from 'react-native';
import { Image, Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Button, Divider, Input, Layout, Text } from '@ui-kitten/components';

export default function NewGuest() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let emailInput, phoneInput;

  return (
    <Layout style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <View style={{ flex: 1 }}>
          <Text category='h1' style={{ padding: 18 }}>Welcome</Text>

          <Image source={require('../../assets/background.jpg')} style={{ width: '100%', flex: 1 }} />
        </View>
      </TouchableWithoutFeedback>

      <Layout style={{ padding: 18 }}>
        <Input
          placeholder="Name"
          autoCompleteType="name"
          clearButtonMode="while-editing"
          autoCapitalize="words"
          size="large"
          value={name}
          blurOnSubmit={false}
          autoCorrect={false}
          style={styles.input}
          onChangeText={nextValue => setName(nextValue)}
          onSubmitEditing={() => { emailInput.focus() }}
        />

        <Input
          placeholder="Email"
          clearButtonMode="while-editing"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCompleteType="email"
          size="large"
          blurOnSubmit={false}
          value={email}
          autoCorrect={false}
          style={styles.input}
          onSubmitEditing={() => { phoneInput.focus() }}
          onChangeText={nextValue => setEmail(nextValue)}
          ref={(input) => { emailInput = input; }}
        />

        <Input
          placeholder="Phone Number"
          autoCompleteType="tel"
          clearButtonMode="while-editing"
          keyboardType="phone-pad"
          size="large"
          autoCorrect={false}
          value={phone}
          style={styles.input}
          onChangeText={nextValue => setPhone(nextValue)}
          ref={(input) => { phoneInput = input; }}
        />

        <Button size="large">Submit</Button>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 14,
  },
});
