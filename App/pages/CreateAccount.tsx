import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import config from '../config';
import { RootState } from '../Store';


export default function Login() {
    const { control, handleSubmit, errors, reset } = useForm()
    const token = useSelector((state: RootState) => state.auth.token)
    const [errorMessage, SetErrorMessage] = useState()
    const onSubmit = async (event: any) => {
        const res = await fetch(`${config.BACKEND_URL}/client_create_account`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(event)
        })
        const json = await res.json()
        if (json.message) {
            SetErrorMessage(json.message)
        }
        if (res.status === 200) {
            reset({
                email: '',
                password: '',
                clinic_name: '',
                phone_number: '',
                address: '',
            })
        }
    }
    return (
        <View style={styles.container}>

            <View>
                {errorMessage && <Text style={styles.label}>
                    {errorMessage}
                </Text>}
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
                {errors.email && <Text>{errors.email?.message}</Text>}
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
                {errors.password && <Text>{errors.password?.message}</Text>}

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
                {errors.clinic_name && <Text>{errors.clinic_name?.message}</Text>}

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
                {errors.phone_number && <Text>{errors.phone_number?.message}</Text>}
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
                {errors.address && <Text>{errors.address?.message}</Text>}

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
        marginTop: 0,
        width: 350,
        textAlignVertical: 'auto'
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
    }
})