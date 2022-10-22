import { Image, Pressable, SafeAreaView, FlatList, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../components/mybasket/AppBar'
import styles from '../styles/mybasket.styles'
import Products from '../components/mybasket/Products'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import Payment from '../components/mybasket/Payment'

interface IProps {
    reduxState: object
}

class MyBasket extends React.Component<IProps> {

    render() {
        const arrayState: any = this.props.reduxState
        const products: any = arrayState.productArray.arr
        return (
            <SafeAreaView style={styles.myBasket}>
                <AppBar />
                <Products products={products} />
                <Payment />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state: any) => ({
    reduxState: state
})

export default connect(mapStateToProps)(MyBasket)
