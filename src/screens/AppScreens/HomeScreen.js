import { View, Text ,FlatList,SafeAreaView ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

//************ import web services *************
import get from '../../webservices/WebApi';

//************* import custom components *********
import { DeafultHeader } from '../../components/Header';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import { colors } from '../../constants/Colors';
import SearchInput from '../../components/SearchInput';



// ********* import helper function ************
import { heightPercentageToDP as hp } from '../../helper/ResponsiveScreen';
import { Strings } from '../../constants/StringConstants';


export default function HomeScreen({navigation}) {
  const [allData, setallData] = useState([])
  const [searchData, setsearchData] = useState([])
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '', value: ''},
    {label: '', value: ''}
  ]);

  useEffect(() => {

    getAllCountriesData()
  }, []);

  //************* get all countries response ***********

  function getAllCountriesData() {
    get('all').then((data) => handelCountriesResponseData(data))

  }

  //**************** handel countries response data **********
  
  function handelCountriesResponseData(data) {
    
    setallData(data)
    setsearchData(data)

    let countryRegion = data.map((i)=>{return({
      label:i.region,
      value:i.region
    })})
    setItems(countryRegion)
    console.log(countryRegion)
  
  }

   // ********** events for search country from list ***********
   function  _handleSearchChange (e) {
     
    const lowercasedValue = e.toLowerCase().trim();
      let filteredData = searchData.filter(el =>
        (el.name.common).toLowerCase().includes(lowercasedValue)
        
    );
    
    setallData(filteredData)
      }

//****************** filter by region ******************

function filterByRegion(val){

  let regionData = searchData.filter(el => el.region == val);
  setallData(regionData)

}


//*********** got to details screen with country details **********
function gotoDetails(name){

    let selected_country =  allData.filter((i)=>i.name.common == name)
    navigation.navigate('CountryDetailsScreen',{countryDetails:selected_country})
}

  const renderItem = ({item}) => {

    return(
      <TouchableOpacity onPress={()=>{gotoDetails(item.name.common)}} style={styles.renderStyle}>
        <Image source={{ url: item.flags.png }} resizeMode="cover" style={styles.imageStyle} />

        <View style={{ padding: hp(2) }}>
          <Text style={styles.titleStyle}>{item.name.common}</Text>
        </View>

        <View style={styles.subTitileStyle}>
          <Text> {Strings.Population} </Text>
          <Text> {item.population}</Text>
        </View>

        <View style={styles.subTitileStyle}>
          <Text> {Strings.Region} </Text>
          <Text> {item.region} </Text>
        </View>

        <View style={[styles.subTitileStyle, { marginBottom: hp(2) }]}>
          <Text> {Strings.Capital} </Text>
          <Text> {item.capital} </Text>
        </View>

      </TouchableOpacity>
    )

  }

  return (
    <>
    <GeneralStatusBarColor hidden={false} barStyle="light-content" backgroundColor={colors.primaryColor} />
    <SafeAreaView style={styles.container}>
      <DeafultHeader title={Strings.homeTitle}/>
      <SearchInput onChangeText={(e)=>{_handleSearchChange(e)}}/>
     <View style={{zIndex:1000,width:'44%', margin:hp(2)}}>
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      zIndexInverse={5000}
      placeholder={'Filter by Region'}
      onSelectItem={(item) => {
        console.log(item);
        filterByRegion(item.value)
      }}
      style={{borderColor:colors.backGroundColor}}
     
    />
    </View>
      <FlatList
                 data={allData}
                 extraData={allData}
                 renderItem={renderItem}
                 keyExtractor={(index) => index.toString()}
                 showsHorizontalScrollIndicator={false}
                 showsVerticalScrollIndicator={false}
    
                />
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:colors.backGroundColor,
    padding:hp(2)
  },
  renderStyle:{
    marginHorizontal:hp(6),
    marginBottom:hp(4),
    borderRadius:hp(2),
    backgroundColor:colors.headerBackground
  },
  imageStyle:{
    height:hp(12),
    width:'100%',
    marginTop:hp(2)
  },
  titleStyle:{
    margin:hp(1),
    fontSize:hp(2),
    fontWeight:'600'
  },
  subTitileStyle:{
    flexDirection:'row',
    paddingHorizontal:hp(2)
  }

})