import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import styles from '../../styles/homepage.styles'
import ModalDropdown from 'react-native-modal-dropdown';
import Feather from 'react-native-vector-icons/Feather'
import MD from 'react-native-vector-icons/MaterialIcons'
import Product from '../../modal/Product'
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../../../redux/actions/productAction'

interface IProps {
    exampleProducts: Array<Object>
}

interface IProductProps {
    key: string
    product: Product
}


// product box component
const ProductBox = (props: IProductProps): any => {

    // product
    const { product } = props

    // redux dispatch and read state
    const dispatch: any = useDispatch();
    const reduxState: object | any = useSelector((state) => state)


    // add product to redux state
    const _addProduct = async (product: object): Promise<any> => {
        await dispatch(productAction(product))
    }

    return (
        <View style={styles.bestSellersProductBox}>
            <View style={styles.bestSellersProductBoxCol}>
                <Image
                    style={styles.bestSellersImage}
                    source={{ uri: product.productImg }} />
                <View style={styles.bestSellersTitleAndDesc}>
                    <Text style={styles.bestSellersProductTitleText}>{product.productTitle}</Text>
                    <Text style={styles.bestSellersDescText}>{product.productDesc}</Text>
                </View>
                <View style={styles.bestSellersPrice}>
                    <Text style={styles.bestSellersPriceText}>£{product.productPrice}</Text>
                </View>
            </View>
            <View style={styles.bestSellersProductShopBoxCol}>
                <View style={styles.bestSellersProductShopStars}>

                    <MD name='star'
                        size={25}
                        color={product.productStar >= 1 ? '#f4c01e' : '#a6a6a6'} />
                    <MD name='star'
                        size={25}
                        color={product.productStar >= 2 ? '#f4c01e' : '#a6a6a6'} />
                    <MD name='star'
                        size={25}
                        color={product.productStar >= 3 ? '#f4c01e' : '#a6a6a6'} />
                    <MD name='star'
                        size={25}
                        color={product.productStar >= 4 ? '#f4c01e' : '#a6a6a6'} />
                    <MD name='star'
                        size={25}
                        color={product.productStar >= 5 ? '#f4c01e' : '#a6a6a6'} />

                </View>
                <View style={styles.bestSellersProductBuy}>
                    <Pressable onPress={() => {
                        _addProduct(product).then((d) => {
                            console.log(reduxState.productArray)

                        })

                    }}>
                        <MD name='add-shopping-cart' size={20} color="black" />
                    </Pressable>

                </View>
            </View>
        </View>
    )
}



// product box builder
const _buildProductBox = (product: Product): any => {

    return (
        <ProductBox
            key={product.productImg}
            product={product}

        />
    )
}


export default class BestSellers extends React.Component<IProps> {

    render() {

        //example products => props from homepage.tsx
        const { exampleProducts } = this.props

        return (
            <View style={styles.bestSellers}>
                <View style={styles.bestSellersTitleBox}>
                    <Text style={styles.bestSellersTitleText}>BEST SELLERS</Text>
                </View>
                <View style={styles.bestSellerFilterBox}>
                    <View style={styles.bestSellerFilterTextBox}>
                        <Feather name='filter' size={14} color="black" />
                        <Text style={styles.bestSellerFilterText}>FILTER</Text>
                    </View>
                    <ModalDropdown style={styles.bestSellerFilterDropdown}
                        defaultValue="TYPE"
                        renderRightComponent={() => {
                            return (
                                <MD name='arrow-drop-down' size={14} color="black" />
                            )
                        }}
                        textStyle={styles.bestSellerFilterText}
                        options={['vegetables', 'kitchen', 'drink', 'fish']} />

                    <ModalDropdown style={styles.bestSellerFilterDropdown}
                        defaultValue="SORT BY"
                        renderRightComponent={() => {
                            return (
                                <MD name='arrow-drop-down' size={14} color="black" />
                            )
                        }}
                        textStyle={styles.bestSellerFilterText}
                        options={['high to low', 'low to high']} />
                </View>
                <View>
                    <FlatList
                        numColumns={2}
                        data={exampleProducts}
                        renderItem={(item: any) => {
                            const productItem = item.item
                            const product =
                                new Product(
                                    productItem.productImg,
                                    productItem.productTitle,
                                    productItem.productDesc,
                                    productItem.productPrice,
                                    productItem.productStar,
                                )

                            console.log(product.productDetails())
                            return _buildProductBox(product)
                        }}
                    />

                </View>
            </View >
        )
    }
}