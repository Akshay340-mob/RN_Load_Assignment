import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {colors} from '../constants/Colors';

// ********* import helper function ************
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../helper/ResponsiveScreen';

export const DeafultHeader = props => {
  return (
    <View style={[styles.container, props.styles]}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: hp(7),
    backgroundColor: colors.headerBackground,
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: hp(2),
    fontWeight: '600',
  },
  headerContainer: {
    justifyContent: 'flex-end',
    padding: hp(2),
  },
});
