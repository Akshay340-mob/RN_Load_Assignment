import React from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';

// ********* constant declare ******** //
import {ImageUrlConstants} from '../constants/ImageUrl';
import {colors} from '../constants/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../helper/ResponsiveScreen';

export default function SearchInput(props) {
  let {
    refField,
    multiline,
    keyboardType,
    disabled,
    returnKeyType,
    onSubmitEditing,
    onChangeText,
    pointerEvents,
    val,
    editable,
    blur,
    focus,
    secureTextEntry,
  } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.Inputcontainer]}>
        <Image
          source={ImageUrlConstants.search}
          resizeMode="center"
          style={{height: hp('3.2'), width: wp('5.2'), marginRight: hp(2)}}
        />

        <TextInput
          style={[
            {
              height: hp('5.4'),
              width: '85%',
              textAlignVertical: 'center',
              marginTop: 2.5,
              fontSize: hp('1.7'),
              color: '#000',
            },
            props.style,
          ]}
          placeholderTextColor={'grey'}
          placeholder={'Search for country...'}
          ref={refField}
          onBlur={blur}
          onFocus={() => focus}
          autoCapitalize={'none'}
          //  secureTextEntry={passwordSecurity}
          multiline={multiline}
          keyboardType={keyboardType}
          maxLength={30}
          disabled={disabled}
          value={val}
          returnKeyType={returnKeyType}
          blurOnSubmit={false}
          onChangeText={onChangeText}
          pointerEvents={pointerEvents}
          editable={editable}
          //ref={refr}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: hp(2),
    backgroundColor: colors.primaryColor,
    borderRadius: hp(1),
  },
  Inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'FFFFFF',
    borderRadius: hp('0.7'),
    padding: hp('0.6'),
  },
});
