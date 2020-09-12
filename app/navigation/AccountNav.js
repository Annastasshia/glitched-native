import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../screens/MessagesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MatchDetailsScreen from "../screens/MatchDetailsScreen";
import MatchesScreen from "../screens/MatchesScreen";
import AccountScreen from "../screens/AccountScreen";
import InterestsEditScreen from "../screens/InterestsEditScreen";



const Stack = createStackNavigator();

const AccountNav = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={ AccountScreen }/>
        <Stack.Screen name="Profile" component={ MatchDetailsScreen }/>
        <Stack.Screen name="Edit" component={ InterestsEditScreen } />
        <Stack.Screen name="Matches" component={ MatchesScreen }/>
        <Stack.Screen name="Messages" component={ MessagesScreen}/>
        <Stack.Screen name="LogOut" component={ WelcomeScreen } />
    </Stack.Navigator>
);

export default AccountNav;