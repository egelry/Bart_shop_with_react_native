import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({

    homePage: {
        backgroundColor: "white"
    },

    /* app bar */
    appBar: {
        height: height * .13,
        width,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    appBarImageBox: {
        height: height * .11,
        width: width * .5,
        justifyContent: "center",
    },
    appBarImage: {
        height: height * .07,
        width: height * .07,
    },
    appBarImageText: {
        fontSize: 14.6,
        color: "black",
        fontFamily: "dejavu-serif.book",
    },
    appBarImageBottomText: {
        fontSize: 7,
        color: "black",
        fontFamily: "dejavu-serif.book",
    },
    appBarMyBasketBox: {
        paddingTop: 5,
        height: height * .13,
        width: width * .4,
    },
    appBarProfile: {
        height: height * .04,
        width: width * .4,
        alignItems: "flex-end",
        justifyContent: "center"

    },
    appBarProfileBox: {
        height: height * .034,
        width: height * .034,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: (height * .03) / 2,
        backgroundColor: "black"

    },
    appBarMyBasket: {
        height: height * .09,
        width: width * .4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    appBarMyBasketTextBox: {

    },
    appBarMyBasketText: {
        fontFamily: "Montserrat-Medium",
        color: "black",

    },
    appBarMyBasketBottomText: {
        fontFamily: "Montserrat-Medium",
        color: "black",
        fontSize: 10,
        textDecorationLine: "underline"
    },
    appBarMyBasketBasketIcon: {

    },


    /* banner */
    banner: {
        height: height * .21,
        width,
        alignItems: "center",
        justifyContent: "center"
    },
    bannerBannerBox: {
        height: height * .21,
        width: width * .9,
        backgroundColor: "#ff914d"
    },
    bannerTitleBox: {
        height: height * .08,
        width: width * .9,
        alignItems: "center",
        justifyContent: "center",
    },
    bannerTitleText: {
        color: "white",
        fontSize: 18,
        fontFamily: "Montserrat-ExtraBold",

    },
    bannerImagesBox: {
        height: height * .13,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    },
    bannerImage: {
        height: height * .1,
        width: height * .1,
    },


    /* best sellers */
    bestSellers: {
        height: height * .63,
        width,

    },
    bestSellersTitleBox: {
        height: height * .06,
        width,
        alignItems: "center",
        justifyContent: "center"
    },
    bestSellersTitleText: {
        color: "black",
        fontSize: 23,
        letterSpacing: -.3,
        fontFamily: "Montserrat-ExtraBold",

    },
    bestSellerFilterBox: {
        height: height * .04,
        width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    bestSellerFilterTextBox: {
        height: height * 0.025,
        width: width * 0.18,
        backgroundColor: "#ff914d",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"

    },
    bestSellerFilterText: {
        fontSize: 10,
        color: "black",
        fontFamily: "Montserrat-Medium",
    },
    bestSellerFilterDropdown: {
        height: height * 0.025,
        width: width * 0.18,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#ff914d"
    },
    bestSellersProductBox: {
        height: height * .265,
        width: width * .5,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    bestSellersProductBoxCol: {
        height: height * .265,
        width: width * .29,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    bestSellersProductShopBoxCol: {
        height: height * .265,
        width: width * .13,
        justifyContent: "space-evenly"
    },
    bestSellersImage: {
        height: height * .16,
        width: width * .29,
    },
    bestSellersTitleAndDesc: {
        alignItems: "center"
    },
    bestSellersPrice: {
        alignItems: "center"
    },
    bestSellersProductTitleText: {
        fontSize: 13,
        color: "black",
        fontFamily: "Montserrat-Bold",

    },
    bestSellersDescText: {
        fontSize: 8,
        color: "#a6a6a6",
        fontFamily: "Montserrat-Bold",
    },
    bestSellersPriceText: {
        fontSize: 13,
        color: "#666",
        fontFamily: "Montserrat-Bold",
    },
    bestSellersProductShopStars: {

    },
    bestSellersProductBuy: {
        paddingLeft: 3
    }

})

export default styles