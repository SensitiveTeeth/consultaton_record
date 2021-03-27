import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Login() {
    const { control, handleSubmit, errors } = useForm()
    const onSubmit = (event: any) => {
        console.log(event)
    }
    console.log('error', errors)
    return (
        <View style={styles.container}>

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
            <View>
                <Text style={styles.label}>Clinic name</Text>
                <Controller
                    name="clinic_name"
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
                <Text style={styles.label}>Phone number</Text>
                <Controller
                    name="phone_number"
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
                <Text style={styles.label}>Address</Text>
                <Controller
                    name="address"
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
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text>
                    Create Account
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
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    input: {
        backgroundColor: '#bcebff',
        height: 40,
        borderRadius: 4,
        padding: 10,
        margin: 10,
        width: 350,
        textAlignVertical: 'auto'
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
    }
})