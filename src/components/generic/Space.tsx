import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/generic.styles'

interface IProps {
    val: number
}

const Space = ({ val }: IProps) => {
    return (
        <View style={styles(val).space} />
    )
}


export default Space
