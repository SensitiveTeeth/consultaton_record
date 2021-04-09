import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IRecord } from '../model';

export default function Record(record: any) {
    function render(singleRecord: any) {
        return singleRecord.map(renderClientRecord)
    }
    const renderClientRecord = (record: IRecord) => (
        <View key={record.id} >
            <Text style={styles.label} >
                Consultation date: {moment(record.consultation_date_and_time).format('YYYY-MM-DD')}
            </Text>
            <Text style={styles.label} > Clinic name: {record.clinic} </Text>
            <Text style={styles.label} > Doctor name: {record.doctor_name} </Text>
            <Text style={styles.label} > Patient name: {record.patient_name} </Text>
            <Text style={styles.label} > Diagnosis: {record.diagnosis} </Text>
            <Text style={styles.label} > Medication: {record.medication} </Text>
            <Text style={styles.label} > Consultation fee: {record.consultation_fee} </Text>
            <Text style={styles.label} >
                Consultation time: {moment(record.consultation_date_and_time).format('hh:mm:ss')}
            </Text>
            <Text style={styles.label} > Follow up Consultation: {record.follow_up_consultation} </Text>
        </View>
    )
    return (
        <View>
            <Text>
                {render([record.route.params.record])}
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