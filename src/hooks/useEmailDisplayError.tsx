import React, {useState} from 'react';
import {Text, TextProps} from 'react-native';
import {Styles} from '../screens/UseEmailDisplayErrorHookScreen/styles';

type TextElement = JSX.Element & {type: typeof Text} & TextProps;

type useEmailOutput = {
  email: string;
  emailError: undefined | string;
  setEmail: (emailInput: string) => void;
  errorTextComponent: TextElement;
};

const emailRegExp = new RegExp('^[a-zA-Z]+@[a-zA-Z]+\\.[a-zA-Z]+$');

const useEmail = (initialInput: string): useEmailOutput => {
  const [emailState, setEmailState] = useState<string>(initialInput);
  const [errorState, setErrorState] = useState<string | undefined>(undefined);

  let errorTextComponent: TextElement = (
    <Text style={Styles.emailErrorTextStyle}>{errorState}</Text>
  );

  const setEmail = (emailInput: string) => {
    if (!emailInput.match(emailRegExp)) {
      setErrorState('Wrong email format!');
    } else {
      setErrorState(undefined);
      setEmailState(emailInput);
    }
  };

  return {
    email: emailState,
    emailError: errorState,
    setEmail,
    errorTextComponent,
  };
};

export default useEmail;
