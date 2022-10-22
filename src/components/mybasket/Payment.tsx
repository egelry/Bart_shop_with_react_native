import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/mybasket.styles'
import Feather from 'react-native-vector-icons/Feather'
import MD from 'react-native-vector-icons/MaterialIcons'

const Payment: React.FC = () => {
    return (
        <View style={styles.payment}>
            <View style={styles.paymentPriceBox}>
                <View style={styles.paymentPriceSide}>
                    <Text style={styles.paymentTotalPriceText}>TOTAL PRICE</Text>
                    <Text style={styles.paymentTotalPricerText}>£12.98</Text>
                </View>
                <View style={styles.paymentCouponSide}>
                    <MD name='receipt' size={14} color="black" />
                    <View style={styles.paymentCouponBox}>
                        <Text style={styles.paymentCouponText}>Coupon</Text></View>
                </View>
            </View>
            <View style={styles.paymentAddressBox}>
                <Feather name='home' size={14} color="black" />
                <Text style={styles.paymentAddressText}>
                    ADDRESS : Tottenham Ct Rd, London W1T 1BA, Birleşik Krallık
                </Text>
            </View>
            <View style={styles.paymentConfirmButton}>
                <Text style={styles.paymentConfirmButtonText}>CONFIRM PAYMENT</Text>
            </View>
        </View>
    )
}

export default Payment





