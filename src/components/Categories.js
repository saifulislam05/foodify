import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../globals/style'

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={styles.box}>
          <FontAwesome5 name='pizza-slice' size={24} color='black' style={styles.icon} />
          <Text style={styles.text}>Pizza</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5 name='hamburger' size={24} color='black' style={styles.icon} />
          <Text style={styles.text}>Burger</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name='noodles' size={24} color='black' style={styles.icon} />
          <Text style={styles.text}>Noodles</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name='cake' size={24} color='black' style={styles.icon} />
          <Text style={styles.text}>Cake</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5 name='hamburger' size={24} color='black' style={styles.icon} />
          <Text style={styles.text}>Burger</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5 name='hamburger' size={24} color='black' style={styles.icon} />
          <Text style={styles.text}>Burger</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5 name='hamburger' size={24} color='black' style={styles.icon} />
          <Text style={styles.text}>Burger</Text>
        </View>




      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: colors.col1,
    elevation: 10,
    borderRadius: 15,
    paddingHorizontal:5,
  },
  title: {
    color: colors.text1,
    fontSize: 25,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
  },
  box: {
    backgroundColor: colors.col1,
    elevation: 20,
    marginHorizontal: 6,
    marginVertical:10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'center'
  },
  icon: {
    marginRight: 10,
    color:colors.text3
  },
  text: {
    fontSize: 17,
    color:colors.text3,
  }

})