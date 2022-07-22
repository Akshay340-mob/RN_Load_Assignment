import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

// ********* import helper function ************
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../helper/ResponsiveScreen';
import {ImageUrlConstants} from '../constants/ImageUrl';

export default function Button(props) {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={styles.container}>
      {props.image ? (
        <Image
          source={ImageUrlConstants.back}
          style={{height: hp(2), width: wp(6), marginRight: hp(1)}}
        />
      ) : null}

      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: wp(30),
    height: hp(5),
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp(1),
  },
});
