import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors, titles,btn1,hr80 } from '../../globals/style'
import {
  AntDesign,
  Octicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";


const SignUp = ({navigation}) => {
    const [emailFocus,setEmailFocus]=useState(false)
    const [fNameFocus,setFNameFocus]=useState(false)
    const [phoneFocus,setPhoneFocus]=useState(false)
    const [passwordFocus,setPasswordFocus]=useState(false)
    const [conPasswordFocus,setConPasswordFocus]=useState(false)
    const [showPassword,setShowPassword]=useState(false)
    const [showConPassword,setShowConPassword]=useState(false)
  const [locationFocus, setLocationFocus] = useState(false)

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.head1}>Sign Up</Text>
          {/* ---------Full name Input box Start------- */}
          <View style={styles.inputOuter}>
            <AntDesign
              name="user"
              size={24}
              color={fNameFocus == true ? colors.text1 : colors.text2}
            />
            <TextInput
              style={styles.input}
              placeholder="Full name"
              onFocus={() => {
                setFNameFocus(true);
                setEmailFocus(false);
                setPhoneFocus(false);
                setPasswordFocus(false);
                setShowPassword(false);
                setLocationFocus(false);
              }}
            />
          </View>
          {/* ---------Full name Input box End------- */}
          {/* ---------Email Input box Start------- */}
          <View style={styles.inputOuter}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color={emailFocus == true ? colors.text1 : colors.text2}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onFocus={() => {
                setFNameFocus(false);
                setEmailFocus(true);
                setPhoneFocus(false);
                setPasswordFocus(false);
                setShowPassword(false);
                setLocationFocus(false);
              }}
            />
          </View>
          {/* ---------Email Input box End------- */}

          {/* ---------Phone number Input box Start------- */}
          <View style={styles.inputOuter}>
            <MaterialIcons
              name="phone-android"
              size={24}
              color={phoneFocus == true ? colors.text1 : colors.text2}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              onFocus={() => {
                setEmailFocus(false);
                setFNameFocus(false);
                setPhoneFocus(true);
                setPasswordFocus(false);
                setShowPassword(false);
                setLocationFocus(false);
              }}
            />
          </View>
          {/* ---------Phone Number Input box End------- */}

          {/* ---------Password Input box Start------- */}
          <View style={styles.inputOuter}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color={passwordFocus == true ? colors.text1 : colors.text2}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onFocus={() => {
                setEmailFocus(false);
                setFNameFocus(false);
                setPasswordFocus(true);
                setConPasswordFocus(false);
                setPhoneFocus(false);
                setLocationFocus(false);
              }}
              secureTextEntry={showPassword == false ? true : false}
            />
            <Octicons
              name={showPassword == false ? "eye-closed" : "eye"}
              size={24}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
          {/* ---------Password Input box End------- */}

          {/* ---------Confirm Password Input box Start------- */}
          <View style={styles.inputOuter}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color={conPasswordFocus == true ? colors.text1 : colors.text2}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onFocus={() => {
                setEmailFocus(false);
                setFNameFocus(false);
                setPhoneFocus(false);
                setPasswordFocus(false);
                setConPasswordFocus(true);
                setLocationFocus(false);
              }}
              secureTextEntry={showConPassword == false ? true : false}
            />
            <Octicons
              name={showConPassword == false ? "eye-closed" : "eye"}
              size={24}
              color="black"
              onPress={() => setShowConPassword(!showConPassword)}
            />
          </View>
          {/* ---------Confirm Password Input box End------- */}

          {/* ---------Address Input box Start------- */}
          <View style={styles.inputOuter}>
            <Entypo
              name="location-pin"
              size={24}
              color={locationFocus == true ? colors.text1 : colors.text2}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              onFocus={() => {
                setEmailFocus(false);
                setFNameFocus(false);
                setPhoneFocus(false);
                setPasswordFocus(false);
                setConPasswordFocus(false);
                setLocationFocus(true);
              }}
            />
          </View>
          {/* ---------Address Input box End------- */}

          <TouchableOpacity style={btn1}>
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>

          <Text style={styles.or}>Or</Text>
          <Text style={styles.withGoogle}>Sign In With</Text>
          <View style={styles.gf}>
            <TouchableOpacity>
              <View style={styles.gfIcon}>
                <AntDesign name="google" size={24} color="#EA4335" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gfIcon}>
                <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={hr80}></View>
          <Text>
            Already have an accoutn ?
            <Text
              style={styles.login}
              onPress={() => navigation.navigate("Login")}
            >
              {" "}
              Log in
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
  },
  wrapper: {
    width: '100%',
    alignItems:'center'
    
  }
  ,
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 10,
  },
  inputOuter: {
    width: "85%",
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: colors.col1,
    paddingVertical:9,
    paddingHorizontal: 12,
    elevation: 20,
    borderRadius: 10,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  btnText: {
    color: colors.col1,
    fontSize: titles.btnText,
    fontWeight: "bold",
  },

  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: "bold",
  },
  withGoogle: {
    color: colors.text2,
    fontSize: 25,
  },
  gf: {
    flexDirection: "row",
  },
  gfIcon: {
    backgroundColor: "white",
    width: 50,
    marginTop: 10,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 12,
  },
  login: {
    color: colors.text1,
    fontSize: 17,
  },
});


export default SignUp;
