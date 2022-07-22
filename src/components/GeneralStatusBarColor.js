import React from 'react';
import {View, StatusBar, StyleSheet, Platform, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp
} from '../helper/ResponsiveScreen';

const {width, height} = Dimensions.get('window');

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' &&
  (height === 812 ||
    width === 812 ||
    height === 896 ||
    width === 896 ||
    height === 926 ||
    width === 926)
    ? hp(6.2)
    : Platform.OS === 'ios'
    ? 20
    : StatusBar.currentHeight;

const GeneralStatusBarColor = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <View style={[styles.statusBar]}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        {...props}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default GeneralStatusBarColor;
