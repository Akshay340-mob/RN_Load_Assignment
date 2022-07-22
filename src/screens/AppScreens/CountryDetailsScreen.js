import { View, Text ,SafeAreaView ,StyleSheet,Image,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'

//************* import custom components *********
import { DeafultHeader } from '../../components/Header';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import { colors } from '../../constants/Colors';

// ********* import helper function ************
import { heightPercentageToDP as hp } from '../../helper/ResponsiveScreen';
import { Strings } from '../../constants/StringConstants';
import Button from '../../components/Button';


export default function CountryDetailsScreen({navigation,route}) {

   let countryDetails = route.params.countryDetails
   const [countryDetail, setcountryDetail] = useState({})
   console.log(countryDetails[0],'kjkjkß') 

   useEffect(() => {
    getCountryDetails()
  
  }, []);

  //********** get country Details ****************

  function getCountryDetails(){
     countryDetails.map((i)=>{setcountryDetail(i)})
     console.log(countryDetail)

  }

  //********** get country langauages ****************

  function getlangauges(){
     let key = Object.keys(countryDetails[0].languages)[0]
     return countryDetails[0].languages[key]

 }

  //************ get native key ************

  function getNativekey(){

    let key = Object.keys(countryDetails[0].name.nativeName)[0]
     return countryDetails[0].name.nativeName[key].common
  }

  //********* get currencies key **************

  function getCurrencieskey(){

    let key = Object.keys(countryDetails[0].currencies)[0]
     return countryDetails[0].currencies[key].name
  }

  return (
    <>
    <GeneralStatusBarColor hidden={false} barStyle="light-content" backgroundColor={colors.primaryColor} />
    <SafeAreaView style={styles.container}>
      <DeafultHeader title={Strings.detailTitle}/>
      <ScrollView>
      <View style={{padding:hp(4)}}>
      <Button onPress={()=>navigation.goBack()} title={'Back'} image={true}/>
      </View>
       
       <View style={{paddingHorizontal:hp(4)}}>
        <Image source={{ url: countryDetails[0].flags.png }} resizeMode="cover" style={styles.imageStyle} />
          <Text style={styles.titleStyle}>{countryDetails[0].name.common}</Text>
         <View style={{marginTop:hp(2)}}>
         <View style={styles.subTitileStyle}>
          <Text>{Strings.NativeName}</Text>
          <Text> {getNativekey()}</Text>
        </View>
          <View style={styles.subTitileStyle}>
          <Text>{Strings.Population}</Text>
          <Text> {countryDetails[0].population}</Text>
        </View>
        <View style={styles.subTitileStyle}>
          <Text>{Strings.Region}</Text>
          <Text> {countryDetails[0].region}</Text>
        </View>
        <View style={styles.subTitileStyle}>
          <Text>{Strings.Capital}</Text>
          <Text> {countryDetails[0].capital}</Text>
        </View>
        </View>

        <View style={{marginTop:hp(3)}}>
         <View style={styles.subTitileStyle}>
          <Text>{Strings.Domain}</Text>
          <Text> {countryDetails[0].tld[0]}</Text>
        </View>
          <View style={styles.subTitileStyle}>
          <Text>{Strings.Currencies}</Text>
          <Text>  {getCurrencieskey()}</Text>
        </View>
        <View style={styles.subTitileStyle}>
          <Text>{Strings.Language}</Text>
          <Text> {getlangauges()}</Text>
        </View>
        

        <Text style={styles.titleStyle}>Border Countries </Text>
        <View style={styles.regionStyle}>
        {
          countryDetails[0].hasOwnProperty('borders')?countryDetails[0].borders.map((i)=>{
            return(
            
               <Button title={i} disabled={true}/>
            )
          }):null
        }

       </View>
        


        </View>
        </View>
        </ScrollView>
    </SafeAreaView>
    </>
  )
}const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:colors.backGroundColor,
      padding:hp(2)
    },
    imageStyle:{
      height:hp(18),
      width:'100%',
      marginTop:hp(2)
    },
    titleStyle:{
      marginTop:hp(2),
      fontSize:hp(2),
      fontWeight:'600'
    },
    subTitileStyle:{
      flexDirection:'row',
      marginTop:hp(1),
    },
    regionStyle:{
      flexWrap: 'wrap',  
      marginTop: hp('1%'), 
      marginBottom: hp('1%'), 
      flexDirection: 'row'
    }
  
  })