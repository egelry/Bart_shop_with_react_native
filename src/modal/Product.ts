interface IProduct {
    productImg: string
    productTitle: string
    productDesc: string
    productPrice: number
    productStar: number
}

export default class Product implements IProduct {
    productImg: string
    productTitle: string
    productDesc: string
    productPrice: number
    productStar: number
    constructor(
        productImg: string,
        productTitle: string,
        productDesc: string,
        productPrice: number,
        productStar: number,) {
        this.productImg = productImg
        this.productTitle = productTitle
        this.productDesc = productDesc
        this.productPrice = productPrice
        this.productStar = productStar
    }


    productDetails(): string {
        return (
            "product : " + this.productTitle + ":" + this.productPrice
        )
    }

}


