import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { restoreLogin } from '../redux/auth/actions';

export default function LoadingScreen() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(restoreLogin)
    })
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