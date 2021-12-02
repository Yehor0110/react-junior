import React, { useState } from 'react';
import {View, TextInput, Text, Button } from 'react-native';
import { homeMainStyle } from './styles/styles';

export default function Form({ addHandl }) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };


    return (
        <View>
            <TextInput style={homeMainStyle.input} onChangeText={onChange} placeholder='What do you want?' />
            <Button style={homeMainStyle.button} title='Add..' onPress={() => addHandl(text)} />
        </View>
    );
}