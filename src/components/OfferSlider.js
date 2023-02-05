import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import style, { colors } from '../globals/style';



const carouselData = [
  {
    id: 1,
    img: "../../assets/offerSliderImages/img1.jpg",
  },
   {
    id: 2,
    img: "../../assets/offerSliderImages/img2.jpg",
  },
   {
    id: 3,
    img: "../../assets/offerSliderImages/img3.jpg",
  },
  
];

const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper
          autoplay={true}
          autoplayTimeout={3}
          showsButtons={true}
          dotColor={colors.text2}
          activeDotColor={colors.text1}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}
        >
          <View style={styles.slide}>
            <Image
              source={require("../../assets/offerSliderImages/img1.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/offerSliderImages/img1.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/offerSliderImages/img1.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../../assets/offerSliderImages/img1.jpg")}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
}

export default OfferSlider

const styles = StyleSheet.create({
  offerSlider: {
    width: "100%",
    height: 200,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: "100%",
    height: 200,
    backgroundColor: colors.col1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 60,
    color: colors.text1,
    fontWeight: "400",
    backgroundColor: "#6e6b6bc4",
    borderRadius: 50,
    width: 40,
    height: 40,
    textAlign: "center",
    lineHeight: 50,
  },
});