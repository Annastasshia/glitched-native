import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import MatchesScreen from '../screens/MatchesScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import MatchNavButton from "./MatchNavButton";
import AccountScreen from "../screens/AccountScreen";
import AccountNav from "./AccountNav";



const Tab = createBottomTabNavigator();

const AppNav = () => (
    <Tab.Navigator>
        <Tab.Screen name="Your Account" component={AccountNav}
        options={{tabBarIcon: ({ color, size }) => 
            <MaterialCommunityIcons name="home" color={color} size={size}/>
        }}/> 
        <Tab.Screen 
        name= "MatchesScreen" 
        component={MatchesScreen}
         
        options={( { navigation } ) => ({
             tabBarButton: () => ( <MatchNavButton
                onPress={() => navigation.navigate("MatchesScreen")}
                />
             ),
             tabBarIcon: ({ color, size }) => 
            <MaterialCommunityIcons name="heart" color={color} size={size}/>
        })}/> 
        <Tab.Screen name="Messages" component={MessagesScreen} 
         options={{tabBarIcon: ({ color, size }) => 
            <MaterialCommunityIcons name="email" color={color} size={size}/>
        }}/> 
    </Tab.Navigator>
);


export default AppNav;