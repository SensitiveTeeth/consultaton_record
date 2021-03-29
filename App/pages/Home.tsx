import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import config from '../config';
import { IRecord } from '../model';
import { RootState } from '../store';

export default function Home() {
    const [viewType, setViewType] = useState<string>('daily')
    const token = useSelector((state: RootState) => state.auth.token)
    const client = useSelector((state: RootState) => state.auth.user)
    const [clientRecord, setClientRecord] = useState<IRecord[]>([])

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
    }
    console.log(viewType)
    useEffect(() => {
        fetchDate(viewType, client)
    }, [])
    function render(records: IRecord[]) {
        return records.map(renderClientRecord)
    }
    const renderClientRecord = (record: IRecord) => (
        <TouchableOpacity key={record.id} onPress={() => {
            navigation.navigate('Record', { record: record })
        }}
        >
            <Text style={styles.label} >
                {viewType === 'daily' && 'date: ' +
                    moment(record.consultation_date_and_time).format('YYYY-MM-DD')
                }
                {viewType === 'weekly' && 'week: ' +
                    moment(record.consultation_date_and_time).format('W')
                }
                {viewType === 'monthly' && 'month: ' +
                    moment(record.consultation_date_and_time).format('MMMM')
                }
            </Text>
        </TouchableOpacity>
    )
    return (
        <>
            <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setViewType('daily')
                    }}>
                    <Text>
                        Daily
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setViewType('weekly')
                    }}>
                    <Text>
                        Weekly
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setViewType('monthly')
                    }}>
                    <Text>
                        Monthly
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center' }}>
                <Text>
                    {render(clientRecord)}
                </Text>
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
        backgroundColor: '#a2b5a0',
        margin: 10,
        marginTop: 25,
        borderRadius: 4,
        padding: 10,
        width: 100,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',


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