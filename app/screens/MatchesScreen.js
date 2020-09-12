import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import MatchUserDelete from '../components/MatchUserDelete'
import ListUserAddAction from '../components/ListUserAddAction'

const initialMatches = [
    {
        id: 1,
        name: 'Kelli Jarrell',
        age: 21,
        image: require('../assets/kelli.jpg'),
        bio: 'I love cats!',
        preference: 'none',
        orientation: {
            icon: {
            name: "female",
            },
        },
        icon1: "death-star-variant",
        color1: "#fd9644",
        icon2: "controller-classic-outline",
        color2: "#fc5c65",
    
    },
    {
        id: 2,
        name: 'Henry Cavill',
        age: 21,
        image: require('../assets/henry.jpg'),
        bio: 'Cavill sounds like travel',
        preference: 'none',
        orientation: {
            icon: {
            name: "male",
            },
        },
        icon1: "book-open-variant",
        color1: "#a55eea",
        icon2: "controller-classic-outline",
        color2: "#fc5c65",
    
    },
    
    {
        id: 3,
        name: 'Yuu Watase',
        age: 21,
        image: require('../assets/yuuWatase.jpg'),
        bio: 'I make manga.',
        preference: 'none',
        orientation: {
            icon: {
                // EIcon component
            name: "circle",
            },
        },
        icon1: "firefox",
        color1: "#45aaf2",
        icon2: "triforce",
        color2: "#26de81",
    
    },

]

export default function MatchesScreen() {
    const [matches, setMatches] = useState(initialMatches);
    const handleDelete = match => {
        // Delete messages from Messages array
        const newMatches = matches.filter(m => m.id !== match.id)
        setMatches(newMatches);
        // Call the server Here 
    }

    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={matches}
            keyExtractor={match => match.id.toString()}
            renderItem={({ item }) =>
                <Card 
                title={item.name}
                subTitle={item.age}
                bio={item.bio}
                image={item.image}
                icon={item.icon1}
                backgroundColor1= {item.color1}
                icon2={item.icon2}
                backgroundColor2={item.color2}
                onPress={() => console.log("Match selected", item)}
                renderRightActions={() => <MatchUserDelete
                onPress={() => handleDelete(item)}
                />}
                renderLeftActions={() => <ListUserAddAction
                    onPress={() => handleDelete(item)}
                    />}

                />
            }/>
            
        </Screen>
        
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.purple,
    }
})
