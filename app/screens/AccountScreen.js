import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Image} from 'react-native'


import ListUser from '../components/ListUser'
import Screen from '../components/Screen'
import Icon from '../components/MCIcon'
import ListItemSeparator from '../components/ListItemSeparator'
import colors from '../config/colors'
import UserHeader from '../components/UserHeader'




const menuItems = [
    {
        title: "My Profile",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        targetScreen: "Profile"
    },
    {
        title: "Matches",
        icon: {
            name: "heart",
            backgroundColor: colors.danger,
        
        },
        targetScreen: "Matches"
    },
    {
        title: "Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: "Messages"
    }
]

function AccountScreen( {navigation} ) {
    
        return (
           
                <Screen style={styles.screen}>
                    <Image style={styles.image} source={require("../assets/background.png")}>
                    </Image> 
                    <View style={styles.container}>
                    <UserHeader
                        title="Anna Ames"
                        subTitle="Eater of sprinkles with chopsticks"
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
                                onPress={() => navigation.navigate(item.targetScreen)}
                                 />
                            }
                            />
                        </View>
                        <View style={styles.container}>
                        <ListUser
                            title='Log Out'
                            onPress={() => navigation.navigate("LogOut")}
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
