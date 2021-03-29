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
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './store';
import Record from './pages/Record';

const innerStack = createStackNavigator();
function HomeStack() {
    return (
        <innerStack.Navigator>
            <innerStack.Screen name="Home" component={Home} />
            <innerStack.Screen name="Record" component={Record} />
        </innerStack.Navigator>
    )
}

const Stack = createStackNavigator();
const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="LoadingScreen" >
                    <Stack.Screen name="Login" component={Login} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="CreateAccount" component={CreateAccount} />
                    <Stack.Screen name="Home" component={HomeStack} />
                    <Stack.Screen name="Loading" component={LoadingScreen} options={{
                        headerShown: false
                    }} />
                </Stack.Navigator>
                <StatusBar barStyle="dark-content" />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
