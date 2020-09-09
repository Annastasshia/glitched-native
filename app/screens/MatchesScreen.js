import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Screen from '../components/Screen'

const matches = [
    {
        id: 1,
        name: 'Kelli Jarrell',
        age: 21,
        image: require('../assets/kelli.jpg'),
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
        bio: 'I am Superman',
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
        id: 2,
        name: 'Yuu Watase',
        age: 21,
        image: require('../assets/yuuWatase.jpg'),
        bio: 'I make manga.',
        orientation: {
            icon: {
                // EIcon component
            name: "circle",
            },
        },
        interests: {
            animeIcon: {
                image: require('../assets/animeIcon.jpg'),
        }
    },
}
]

export default function MatchesScreen() {
    return (
        <Screen>
            <FlatList />
        </Screen>
    )
}

const styles = StyleSheet.create({})
