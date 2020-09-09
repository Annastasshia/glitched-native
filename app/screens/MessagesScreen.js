import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'

import ListItem from '../components/ListItem'
import Screen from "../components/Screen";
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';




const initialMessages = [
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

    //Set state for messages
    const [messages, setMessages] = useState(initialMessages);
    //Set state for refresh
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // Delete messages from Messages array
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages);
        // Call the server Here 
    }
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
                    onPress={() => console.log("Message selected", item)} 
                    renderRightActions={() => <ListItemDeleteAction
                    onPress={() => handleDelete(item)}
                    />} 
                />
             )} 
             
               ItemSeparatorComponent={ListItemSeparator}
               refreshing={refreshing}
               onRefresh={() => {
                   setMessages([
                    {
                        id: 3,
                        title: 'T3',
                        description: 'D3',
                        image: require('../assets/anna.jpg')
                
                    }
                   ])
               }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    
})
