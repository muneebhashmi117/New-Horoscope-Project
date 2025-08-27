// src/components/customStatusBar/CustomStatusBar.js

import React from 'react';
import { StatusBar } from 'react-native';
import { COLORS } from '../../enums/StyleGuide';

const CustomStatusBar = () => {
  return (
    <StatusBar
      backgroundColor={COLORS.white}
      barStyle="dark-content"
      translucent={false}
    />
  );
};

export default CustomStatusBar;
