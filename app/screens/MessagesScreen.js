import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'

import ListItem from '../components/ListItem'
import Screen from "../components/Screen";
import ListItemSeparator from '../components/ListItemSeparator';




const messages = [
    {
        id: 1,
        title: 'T2',
        description: 'D1',
        image: require('../assets/anna.jpg')

    },
    {
        id: 2,
        title: 'T2',
        description: 'D1',
        image: require('../assets/anna.jpg')

    }
]


export default function MessagesScreen() {
    return (
        <Screen>
            <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => (
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message selected")} 
                /> 
             )} 
               ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    
})
