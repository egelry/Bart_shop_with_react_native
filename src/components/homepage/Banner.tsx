import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/homepage.styles'

export default class Banner extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <View style={styles.banner} >
        <View style={styles.bannerBannerBox}>
          <View style={styles.bannerTitleBox}>
            <Text style={styles.bannerTitleText}>
              NATION'S LARGEST FOOD SHOP
            </Text>
          </View>
          <View style={styles.bannerImagesBox}>
            <Image
              style={styles.bannerImage}
              source={require('../../../assets/images/1112.png')} />
            <Image
              style={styles.bannerImage}
              source={require('../../../assets/images/111.png')} />
            <Image
              style={styles.bannerImage}
              source={require('../../../assets/images/175782.png')} />
            <Image
              style={styles.bannerImage}
              source={require('../../../assets/images/193720.png')} />
          </View>
        </View>
      </View>
    )
  }
}
