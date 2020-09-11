import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import MatchesScreen from '../screens/MatchesScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';



const Tab = createBottomTabNavigator();

const AppNav = () => (
    <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileEditScreen}
        options={{tabBarIcon: () => 
            <MaterialCommunityIcons name="home" />
        }}/> 
        <Tab.Screen name="Matches" component={MatchesScreen} 
         options={{tabBarIcon: () => 
            <MaterialCommunityIcons name="heart" />
        }}/> 
        <Tab.Screen name="Messages" component={MessagesScreen} 
         options={{tabBarIcon: () => 
            <MaterialCommunityIcons name="email" />
        }}/> 
    </Tab.Navigator>
);


export default AppNav;