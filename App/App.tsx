/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Login from './pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import CreateAccount from './pages/CreateAccount';

const Stack = createStackNavigator();
const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
            </Stack.Navigator>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>

            </SafeAreaView>
        </NavigationContainer>
    );
};

export default App;
