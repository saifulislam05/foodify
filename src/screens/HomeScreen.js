import { StyleSheet, Text, View,StatusBar,TextInput } from 'react-native'
import React, { useState } from 'react'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlider from '../components/OfferSlider'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../globals/style'

const HomeScreen = () => {
    const [searchFocus,setSearchFocus]=useState(false)
  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeadNav />
      <View style={styles.SearchWrapper}>
        <AntDesign
          name="search1"
          size={24}
          color= {colors.text1}
          style={styles.searchIcon}
        />
        <TextInput style={styles.searchInput} placeholder="Search"  />
      </View>
      <Categories />
      <OfferSlider />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.col1,
        alignItems: 'center',
        width:'100%',
        
    },
    SearchWrapper: {
        width: '90%',
        flexDirection: 'row',
        backgroundColor: colors.col1,
        borderRadius: 30,
        alignItems: 'center',
        padding: 10,
        margin: 20,
      elevation:10
    },
    searchIcon: {
        
    },
    searchInput: {
        marginLeft: 10,
        width: '85%',
        fontSize: 18,
        color:colors.text1,
    }
})