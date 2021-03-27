/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import LoadingScreen from './pages/LoadingScreen'

const Stack = createStackNavigator();
const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoadingScreen" >
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>

            </SafeAreaView>
        </NavigationContainer>
    );
};

export default App;
