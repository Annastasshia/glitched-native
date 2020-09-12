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
        preference: 'male',
        bio: 'I like Cats',
        orientation: {
            icon: {
            name: "gender-female",
        },
        },
        interests: {
            icon: {
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
            icon: {
                //FAIcon component 
                name:"dice-d20" 
            },
            icon: {
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
            icon: {
                image: require('../assets/animeIcon.png'),
        }
    },
}
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
                image={item.image}
                icon={item.interests.icon.name}
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
