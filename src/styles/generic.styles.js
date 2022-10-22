import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = (val) => StyleSheet.create({
    space: {
        height: height * val
    }
})

export default styles