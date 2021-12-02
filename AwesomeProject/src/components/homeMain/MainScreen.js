import React, { useState } from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from './ListItem';
import Form from './Form';
import { homeMainStyle } from './styles/styles'

export default function HomeMain() {
    const [listOfItems, setListOfItems] = useState([
        {text: 'I want to buy everything', key: 1},
    ]);

    const addHandl = (text) => {
        setListOfItems((list) => {
            return [
                { text:text, key: Math.random().toString(36).substring(7) },
                ...list
            ]
        });
    }

    const deleteHandl = (key) => {
        setListOfItems((list) => {
            return list.filter(listOfItems => listOfItems.key != key)
        });
    }
    return (
        <View style= {homeMainStyle.main}>
            <Form addHandl={addHandl} />
            <FlatList data={listOfItems} renderItem = {({ item }) => (
            <ListItem el={item} deleteHandl={deleteHandl} />
        )} />
        </View>
    );
}
