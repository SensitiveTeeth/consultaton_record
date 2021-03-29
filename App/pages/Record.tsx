import moment from 'moment';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IRecord } from '../model';

export default function Record(props: IRecord) {
    function render(singleRecord: any) {
        return singleRecord.map(renderClientRecord)
    }
    const renderClientRecord = (record: IRecord) => (
        <View key={record.id} >
            <Text style={styles.label} >
                {moment(record.consultation_date_and_time).format('YYYY-MM-DD hh:mm:ss')}
            </Text>
            <Text> {record.clinic} </Text>
            <Text> {record.doctor_name} </Text>
            <Text> {record.patient_name} </Text>
            <Text> {record.diagnosis} </Text>
            <Text> {record.medication} </Text>
            <Text> {record.consultation_fee} </Text>
            <Text> {record.consultation_date_and_time} </Text>
            <Text> {record.follow_up_consultation} </Text>
        </View>
    )
    return (
        <View>
            <Text>
                {render(props)}
            </Text>
        </View>
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