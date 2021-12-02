import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { homeMainStyle } from './styles/styles';

export default function ListItem({el, deleteHandl}) {
    return (
        <TouchableOpacity onPress={() => deleteHandl(el.key)}>
            <Text style={homeMainStyle.listItemText}> {el.text} </Text>
        </TouchableOpacity>
    );
}