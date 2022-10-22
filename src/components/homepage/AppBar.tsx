import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/homepage.styles'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const AppBar = (): object => {


  // props can be instead of any. like this : 
  // const navigation = useNavigation<props>()

  const navigation = useNavigation<any>()

  return (
    <View style={styles.appBar}>

      {/* app bar image box */}
      <View style={styles.appBarImageBox}>
        <Image
          style={styles.appBarImage}
          source={require('../../../assets/images/123.jpg')} />
        <Text style={styles.appBarImageText}>
          BART
        </Text>
        <Text style={styles.appBarImageBottomText}>
          SHOPPING
        </Text>
      </View>

      {/* my basket area */}
      <View style={styles.appBarMyBasketBox}>
        <View style={styles.appBarProfile}>
          <View style={styles.appBarProfileBox}>
            <Feather name='user' size={18} color="white" />
          </View>
        </View>

        <Pressable
          onPress={()=>{
            navigation.navigate('MyBasket')
          }}

        >
          <View style={styles.appBarMyBasket}>
            <View style={styles.appBarMyBasketTextBox}>
              <Text style={styles.appBarMyBasketText}>
                MY BASKET
              </Text>
              <Text style={styles.appBarMyBasketBottomText}>
                0 PRODUCT
              </Text>
            </View>
            <View style={styles.appBarMyBasketBasketIcon}>
              <Feather name='shopping-cart' size={27} color="black" />
            </View>
          </View>
        </Pressable>
      </View>
    </View >
  )
}

export default AppBar

