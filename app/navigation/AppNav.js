import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatchesScreen from '../screens/MatchesScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';

const Tab = createBottomTabNavigator();

const AppNav = () => (
    <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileEditScreen} /> 
        <Tab.Screen name="Matches" component={MatchesScreen} /> 
        <Tab.Screen name="Messages" component={MessagesScreen} /> 
    </Tab.Navigator>
);

export default AppNav;