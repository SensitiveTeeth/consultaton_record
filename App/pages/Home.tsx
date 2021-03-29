import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import config from '../config';
import { IRecord } from '../model';
import { RootState } from '../store';

export default function Home() {
    const [viewType, setViewType] = useState('daily')
    const token = useSelector((state: RootState) => state.auth.token)
    const client = useSelector((state: RootState) => state.auth.user)
    const [clientRecord, setClientRecord] = useState(Object)

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
    useEffect(() => {
        fetchDate(viewType, client)
    }, [viewType, client])

    const renderClientRecord = (record: IRecord) => (
        <View key={record.id}>
            <Text> {record.consultation_date_and_time} </Text>
        </View>
    )
    return (
        <>
            {clientRecord && clientRecord.map(renderClientRecord)}
        </>
    )
}