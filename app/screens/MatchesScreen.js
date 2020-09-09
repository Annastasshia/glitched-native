import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Screen from '../components/Screen'

const matches = [
    {
        id: 1,
        name: 'Kelli Jarrell',
        age: 21,
        orientation: {
            icon: {
            name: "gender-female",
        },
        image: require('../assets/kelli.jpg'),
        },
        bio: 'I like Cats',
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
        orientation: {
            icon: {
            name: "gender-male",
        },
        image: require('../assets/henry.jpg'),
        },
        bio: 'I am Superman',
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
