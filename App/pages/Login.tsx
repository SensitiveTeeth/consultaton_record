import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/actions';
import { RootState } from '../store';


export default function Login(props: any) {
    const dispatch = useDispatch()
    const { control, handleSubmit, errors } = useForm()
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const navigation = useNavigation();

    const onSubmit = (event: any) => {
        dispatch(login(event.email, event.password))
    }
    useEffect(() => {
        if (isAuthenticated) {
            navigation.navigate('Home')
        }
    }, [isAuthenticated, navigation])
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Login
                </Text>
            </View>
            <View>
                <Text style={styles.label}>Email</Text>
                <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    rules={{ required: 'This is required.' }}
                    render={(props) => (
                        <TextInput
                            {...props}
                            style={styles.input}
                            onChangeText={(value) => {
                                props.onChange(value)
                            }}
                        />
                    )}
                />
            </View>
            <View>
                <Text style={styles.label}>Password</Text>
                <Controller
                    name="password"
                    defaultValue=""
                    control={control}
                    rules={{ required: 'This is required.' }}
                    render={(props) => (
                        <TextInput
                            {...props}
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={(value) => {
                                props.onChange(value)
                            }}
                        />
                    )}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                props.navigation.navigate("CreateAccount")
            }}>
                <Text>
                    Create account
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: "black",
        margin: 20,
        marginLeft: 10,
        fontSize: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a2b5a0',
        margin: 10,
        marginTop: 25,
        borderRadius: 4,
        padding: 10,
    },
    container: {
        flex: 1,
        marginTop: -100,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#49e9eb',
        height: 40,
        borderRadius: 4,
        padding: 10,
        margin: 10,
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
    }
})