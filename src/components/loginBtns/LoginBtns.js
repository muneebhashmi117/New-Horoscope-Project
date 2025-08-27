import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, TEXT_STYLE} from '../../enums/StyleGuide';


const LoginBtns = ({text, leftSvg}) => {
  return (
    <View>
      <Pressable style={styles.press}>
        {leftSvg}
        <Text style={styles.presstext}>Continue with {text}</Text>
        
      </Pressable>
    </View>
  );
};

export default LoginBtns;

const styles = StyleSheet.create({
  press: {
    borderWidth: 1.0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  presstext: {
    ...TEXT_STYLE.bigTextMedium,
    marginLeft: 10,
    color: COLORS.black,
  },
});
