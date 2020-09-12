import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'

import ListItem from '../components/ListUser'
import Screen from "../components/Screen";
import ListItemSeparator from '../components/ListItemSeparator';
import ListUserDeleteAction from '../components/ListUserDeleteAction';




const initialMessages = [
    {
        id: 1,
        title: 'Kelli',
        description: 'Hey!',
        image: require('../assets/kelli.jpg')

    },
    {
        id: 2,
        title: 'Henry',
        description: 'Listen!',
        image: require('../assets/henry.jpg')

    },
    {
        id: 3,
        title: 'Yuu',
        description: 'Cake is a Lie',
        image: require('../assets/yuuWatase.jpg')

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
                    renderRightActions={() => <ListUserDeleteAction
                    onPress={() => handleDelete(item)}
                    />} 
                />
             )} 
             
               ItemSeparatorComponent={ListItemSeparator}
               refreshing={refreshing}
               onRefresh={() => {
                   setMessages([
                    {
                        id: 4,
                        title: 'Taylour',
                        description: 'Its dangerous to go alone',
                        image: require('../assets/taylour.jpg')
                
                    },
                    {
                        id: 3,
                        title: 'Yuu',
                        description: ':)',
                        image: require('../assets/yuuWatase.jpg')
                
                    },
                    {
                        id: 2,
                        title: 'Henry',
                        description: 'Listen!',
                        image: require('../assets/henry.jpg')
                
                    }
                   ])
               }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    
})
