import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import useEmail from '../../hooks/useEmail';
import {Stack} from 'react-native-spacing-system';
import {Styles} from './styles';

function UseEmailHookScreen() {
  const [emailInput, setEmailInput] = useState('');
  const {email, emailError, setEmail} = useEmail('');

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
      <Text style={Styles.emailErrorTextStyle}>{emailError ?? emailError}</Text>
      <Stack size={10} />
      <View>
        <Button title="Submit" onPress={handleEmailSubmit} />
      </View>
    </SafeAreaView>
  );
}

export default UseEmailHookScreen;
