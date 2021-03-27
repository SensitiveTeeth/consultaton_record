import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { restoreLogin } from '../redux/auth/actions';
import { RootState } from '../store';

export default function LoadingScreen() {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    useEffect(() => {
        dispatch(restoreLogin())
    }, [dispatch])

    useEffect(() => {
        if (isAuthenticated == null) return;
        if (isAuthenticated) return navigation.navigate('Home')
        return navigation.navigate('Login')
    }, [isAuthenticated])
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        }}>
            <Text style={{
                fontSize: 20
            }}>
                Loading...
            </Text>
        </View>
    )
}