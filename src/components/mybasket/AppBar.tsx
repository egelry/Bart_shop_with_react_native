import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/mybasket.styles'
import Feather from 'react-native-vector-icons/Feather'


export default class AppBar extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <View style={styles.appBar}>
                <Feather name='arrow-left' size={18} color="black" />
                <View style={styles.appBarTextBox}>
                    <Text style={styles.appBarText}>MY BASKET</Text>
                    <Feather name='shopping-bag' size={18} color="black" />
                </View>
            </View >
        )
    }
}
