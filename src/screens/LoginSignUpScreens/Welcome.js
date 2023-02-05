import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import logo from '../../../assets/burger.png'
import {colors,hr80} from '../../globals/style'

const Welcome = () => {
  return (
      <View style={styles.container}>
      <Text style={styles.title} >Welcome to Foodfy</Text>
      <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={logo} />
      </View>
      <View style={hr80} />
      <Text style={styles.text}>Get food in your door step at lowest price</Text>
      <View style={hr80}/>
          <View style={styles.btnWrapper}>
              <TouchableOpacity style={styles.Btn}>
                  <Text style={styles.btnText}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Btn}>
                  <Text style={styles.btnText}>Log in</Text>
              </TouchableOpacity>
              
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  title: {
    fontSize: 50,
    color: colors.col1,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "200",
  },
  logoWrapper: {
    width: "80%",
    height: "30%",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
  },
  text: {
    color: colors.col1,
    fontSize: 18,
    width: "80%",
    textAlign: "center",
  },
  btnWrapper: {
    flexDirection: "row",
    // width:''
  },
  btnText: {
    fontSize: 20,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: "700",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
export default Welcome