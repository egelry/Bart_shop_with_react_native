import { Image, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/mybasket.styles'
import { connect } from 'react-redux'

interface IProps {
    products: object | any
}


export default class Products extends React.Component<IProps>{


    _buildProductBox(product: any) {
        const item = product.item
        return (
            <View style={styles.productBox}>
                <View style={styles.productBoxImageBox}>
                    <Image
                        source={{ uri: item.productImg }}
                        style={styles.productBoxImage}
                    />
                </View>
                <View style={styles.productBoxDescBox}>
                    <Text style={styles.productTitleText}>{item.productTitle}</Text>
                    <Text style={styles.productDescText}>{item.productDesc}</Text>
                    <Text style={styles.productPriceText}>£{item.productPrice}</Text>
                </View>
            </View>
        )
    }


    render() {
        return (
            <View style={styles.products}>
                <FlatList
                    numColumns={1}
                    data={this.props.products}
                    renderItem={(item: any): any => {
                        return this._buildProductBox(item)
                    }}
                />
            </View>
        )
    }
}




