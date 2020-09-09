import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image} from 'react-native'

import ListItem from '../components/ListUser'
import Screen from '../components/Screen'
import Icon from '../components/MCIcon'
import ListItemSeparator from '../components/ListItemSeparator'
import colors from '../config/colors'


const menuItems = [
    {
        title: "My Profile",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },
    {
        title: "Matches",
        icon: {
            name: "heart",
            backgroundColor: colors.danger,
        
        }
    },
    {
        title: "Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        }
    }
]

function AccountScreen(props) {
    
        return (
           
                <Screen style={styles.screen}>
                    <Image style={styles.image} source={require("../assets/background.png")}>
                    </Image> 
                    <View style={styles.container}>
                    <ListItem
                        title="Anna Ames"
                        subTitle="programmer"
                        image={require('../assets/anna.jpg')}
                    />
                    </View>
                    
                    <View style={styles.container}>
                        <FlatList
                            data={menuItems}
                            keyExtractor={menuItem => menuItem.title}
                            ItemSeparatorComponent={ListItemSeparator}
                            renderItem={({ item }) =>
                                 <ListUser
                                 title={item.title}
                                 IconComponent={
                                    <Icon 
                                     name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                     />
                                }
                                 />
                            }
                            />
                        </View>
                        <View style={styles.container}>
                        <ListItem
                            title='Log Out'
                            IconComponent={
                                <Icon name="logout" backgroundColor={colors.purple}/>
                            } />
                        </View>
                    </Screen>
                
        )
    }

export default AccountScreen;

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
        
    },
    image: {
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        height: 700,
        
        opacity: 0.3
    },
    screen:{
       
    }

})
