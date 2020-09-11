import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'

const matches = [
    {
        id: 1,
        name: 'Kelli Jarrell',
        age: 21,
        image: require('../assets/kelli.jpg'),
        preference: 'male',
        bio: 'I like Cats',
        orientation: {
            icon: {
            name: "gender-female",
        },
        },
        interests: {
            gameIcon: {
                //MCIcon component
                name:"gamepad-square-outline"
            }
        }
    },
    {
        id: 2,
        name: 'Henry Cavill',
        age: 21,
        image: require('../assets/henry.jpg'),
        bio: 'I am the Witcher',
        preference: 'female',
        orientation: {
            icon: {
            name: "gender-male",
            },
        },
        interests: {
            tabletopIcon: {
                //FAIcon component 
                name:"dice-d20" 
            },
            comicIcon: {
                //EIcon component 
                name:"mask"
            }
        }
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
        interests: {
            animeIcon: {
                image: require('../assets/animeIcon.png'),
        }
    },
}
]

export default function MatchesScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={matches}
            keyExtractor={match => match.id.toString()}
            renderItem={({ item }) =>
                <Card 
                title={item.name}
                subTitle={item.age}
                image={item.image}
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
