import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Picker } from '@react-native-community/picker'
import { useSelector } from 'react-redux';
import config from '../config';
import { IRecord, initialRecord } from '../model';
import { RootState } from '../store';
import moment from 'moment'
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [viewType, setViewType] = useState('daily')
    const token = useSelector((state: RootState) => state.auth.token)
    const client = useSelector((state: RootState) => state.auth.user)
    const [clientRecord, setClientRecord] = useState<IRecord>(initialRecord)
    const navigation = useNavigation();


    async function fetchDate(viewType: string, client: any) {
        const res = await fetch(`${config.BACKEND_URL}/get_client_consultation_record`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ viewType, client })
        })
        const json = await res.json()
        setClientRecord(json)
        console.log(json)
    }
    useEffect(() => {
        fetchDate(viewType, client)
    }, [])

    function render(clientRecord: any) {
        return clientRecord.map(renderClientRecord)
    }
    const renderClientRecord = (record: IRecord) => (
        <TouchableHighlight key={record.id} onPress={() => {
            navigation.navigate('Record', { props: { record } })
        }}
        >
            <Text style={styles.label} >
                {moment(record.consultation_date_and_time).format('YYYY-MM-DD hh:mm:ss')}
            </Text>
        </TouchableHighlight>
    )
    return (
        <>
            <View style={{ justifyContent: 'center' }}>
                <Picker
                    style={{ height: 200, width: 380, justifyContent: 'center' }}
                    selectedValue={viewType}
                    onValueChange={(itemValue: any, itemIndex: any) => setViewType(itemValue)}
                >
                    <Picker.Item label="daily" value="daily" />
                    <Picker.Item label="weekly" value="weekly" />
                    <Picker.Item label="monthly" value="monthly" />
                </Picker>
            </View>
            <View>
                <TouchableHighlight style={styles.button} onPress={() => {
                    fetchDate(viewType, client)
                }}>
                    <Text>
                        Submit
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.container}>
                {render(clientRecord)}
            </View>
        </>
    )

}


const styles = StyleSheet.create({
    label: {
        color: "black",
        margin: 20,
        marginLeft: 10,
        fontSize: 25,
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
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
    }
})