import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  FontAwesome5, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import style, { colors } from '../globals/style';

const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
      <Fontisto
        name="nav-icon-list-a"
        size={24}
        color="black"
        style={styles.icon}
      />
      <View style={styles.logoWrapper}>
        <Text style={styles.logoText}>Foodify</Text>
        <MaterialCommunityIcons
          name="food-outline"
          size={26}
          color="black"
          style={styles.icon}
        />
      </View>
      <FontAwesome5 name="user-circle" size={24} color="black" style={styles.icon} />
    </View>
  );
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.col1,
        elevation: 20,
        padding: 10,
        paddingHorizontal:15,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    logoWrapper: {
        flexDirection: 'row',
        alignItems:'center'
        
    },
    icon: {
        color:colors.text1,
    },
    logoText: {
        color: colors.text1,
        fontSize:24,
    }
        
})