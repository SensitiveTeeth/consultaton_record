import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Login(props: any) {
    const { control, handleSubmit, errors } = useForm()
    const onSubmit = (event: any) => {
        console.log(event)
    }
    console.log('error', errors)
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
                    name="Email"
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
                    name="Password"
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