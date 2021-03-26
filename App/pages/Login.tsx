import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form'


export default function Login() {
    const { control, handleSubmit, errors } = useForm()
    const onSubmit = (event: any) => {
        console.log(event)
    }
    console.log('error', errors)
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Username</Text>
                <Controller
                    name="Username"
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
            <Button color="black" title="Login" onPress={handleSubmit(onSubmit)}></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: "black",
        margin: 20,
        marginLeft: 10,
    },
    button: {
        marginTop: 40,
        borderRadius: 4,
        backgroundColor: 'black',
        color: 'black',
        width: 300,
        borderColor: 'black'
    },
    container: {
        flex: 1,
        marginTop: -100,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'grey',
        height: 40,
        borderRadius: 4,
        padding: 10,
        margin: 10,
    },
})