import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";


const GuidePage = () => {
    return (
        <ScrollView style={{ padding: 16, }}>
            <Text style={styles.heading}>ᴛʀᴇᴍᴏʀ ɢᴜᴀʀᴅ</Text>
            <Text style={{ fontSize: 25, margin: 10 }}>
                1. Click on My Home Tab
            </Text>
            <Text style={{ fontSize: 25, margin: 10 }}>
                2. ⁠If Bluetooth and location are off, it will ask for them to turn On.
            </Text>
            <Text style={{ fontSize: 25, margin: 10 }}>
                3. ⁠Select the Tremor Guard from the list after device scan.
            </Text>
            <Text style={{ fontSize: 25, margin: 10 }}>
                4. Move to Control page of the application and select the buttons to control the application.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
        textDecorationLine: 'underline'
    },
    // Add more styles as needed for other components
});


export default GuidePage