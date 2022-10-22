import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../components/homepage/AppBar'
import Banner from '../components/homepage/Banner'
import Space from '../components/generic/Space'
import BestSellers from '../components/homepage/BestSellers'
import styles from '../styles/homepage.styles'


interface IState {
    counter: number
    message: string
}

interface IProps {

}

const exampleProducts: Array<Object> = [
    {
        productImg: `https://i.pinimg.com/736x/aa/94/e9/aa94e945a329cf58b17e6925c9039cfa.jpg`,
        productTitle: "TOMATO",
        productDesc: "cherry sweet aperitif",
        productPrice: 1,
        productStar: 3
    },
    {
        productImg: `http://atlas-content-cdn.pixelsquid.com/stock-images/glass-of-milk-2J8GZn7-600.jpg`,
        productTitle: "MILK",
        productDesc: "daily cow millk",
        productPrice: 2,
        productStar: 4
    },
    {
        productImg: `data:image/jpeg;base64,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`,
        productTitle: "REDBULL",
        productDesc: "find your strengths",
        productPrice: 1,
        productStar: 5
    },

    {
        productImg: `https://us.123rf.com/450wm/surachai1/surachai12004/surachai1200400042/145203773-fresh-raw-fish-isolated-on-white-background-with-clipping-path.jpg?ver=6`,
        productTitle: "MACKEREL",
        productDesc: "MSC CERTIFIED (frozen)",
        productPrice: 1,
        productStar: 3
    },
]

export default class HomePage extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            counter: 0,
            message: "message for page one"
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.homePage}>
                <AppBar />
                <Space val={.01} />
                <Banner />
                <Space val={.02} />
                <BestSellers exampleProducts={exampleProducts} />
            </SafeAreaView>
        )
    }
}

