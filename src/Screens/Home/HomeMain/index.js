import React from 'react';
import { ScrollView } from 'react-native';
import { Brand } from '@/Components';
import { useTheme } from '@/Hooks';

const HomeMain = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme();

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}>
      <Brand />
    </ScrollView>
  );
};

export default HomeMain;
