import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import useEmailDisplayError from '../../hooks/useEmailDisplayError';
import {Stack} from 'react-native-spacing-system';
import {Styles} from './styles';

function UseEmailDisplayErrorHookScreen() {
  const [emailInput, setEmailInput] = useState('');

  const {email, setEmail, errorTextComponent} = useEmailDisplayError('');

  const handleEmailSubmit = () => {
    setEmail(emailInput);
  };

  return (
    <SafeAreaView style={Styles.mainContainerStyle}>
      <Text style={Styles.emailTextStyle}>Email: {email}</Text>
      <Stack size={10} />
      <TextInput
        value={emailInput}
        onChangeText={setEmailInput}
        style={Styles.emailTextInputStyle}
      />
      <Stack size={10} />
      {errorTextComponent}
      <Stack size={10} />
      <View>
        <Button title="Submit" onPress={handleEmailSubmit} />
      </View>
    </SafeAreaView>
  );
}

export default UseEmailDisplayErrorHookScreen;
