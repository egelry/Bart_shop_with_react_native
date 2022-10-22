import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({


    // my basket page
    myBasket: {
        height,
        width,
        backgroundColor: "white"
    },

    // appbar
    appBar: {
        height: height * .08,
        width,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        flexDirection: "row"
    },
    appBarTextBox: {
        width: width * .4,
        height: height * .08,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    appBarText: {
        fontSize: 18,
        color: "black",
        fontFamily: "Montserrat-Medium",

    },

    // products
    products: {
        height: height * .7,
        width,
    },
    productBox: {
        height: height * .15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productBoxImageBox: {
        paddingLeft: 50,

    },
    productBoxImage: {
        height: height * .15,
        width: height * .15,
    },
    productBoxDescBox: {
        width: (width - (height * .15) - 50),
        alignItems: "center",
        justifyContent: "center"
    },
    productTitleText: {
        color: "black",
        fontFamily: "Montserrat-Bold",
    },
    productDescText: {
        fontSize: 12,
        color: "#a6a6a6",
        fontFamily: "Montserrat-Medium",

    },
    productPriceText: {
        color: "#666",
        fontFamily: "Montserrat-Medium",
    },

    // payment 
    payment: {
        height: height * .27,
        width,
        backgroundColor: "#fafafa"
    },
    paymentPriceBox: {
        height: height * 0.08,
        width,
        flexDirection: "row"
    },
    paymentAddressBox: {
        height: height * 0.05,
        width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    paymentConfirmButton: {
        height: height * .03,
        borderRadius: 5,
        alignSelf: "center",
        width: width * .8,
        backgroundColor: "#ff914d",
        alignItems: "center",
        justifyContent: "center"
    },
    paymentPriceSide: {
        height: height * .08,
        width: width * .5,
        alignItems: "center",
        justifyContent: "center"
    },
    paymentCouponSide: {
        height: height * 0.08,
        width: width * .5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },
    paymentTotalPriceText: {
        color: "black",
        fontFamily: "Montserrat-Medium",
    },
    paymentTotalPricerText: {
        color: "#ff914d",
        fontFamily: "Montserrat-Bold",
    },
    paymentCouponBox: {
        width: width * .4,
        backgroundColor: "white",
        borderRadius: 8,
        marginLeft: 10
    },
    paymentCouponText: {
        marginLeft: 4,
        fontSize: 13,
        color: "#a6a6a6",
        fontFamily: "Montserrat-Medium",
        letterSpacing: 0.1
    },
    paymentAddressText: {
        fontSize: 10,
        color: "#a6a6a6",
        fontFamily: "Montserrat-Medium",

    },
    paymentConfirmButtonText: {
        fontSize: 10,
        color: "white",
        fontFamily: "Montserrat-Medium",
        letterSpacing: 1.3

    }

})

export default styles