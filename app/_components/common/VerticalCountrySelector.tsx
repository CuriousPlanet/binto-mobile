import { GestureResponderEvent, Pressable, View } from 'react-native';
import React, { useState } from 'react';
import FlagIcon from './FlagIcon';
import Icon from 'react-native-vector-icons/Ionicons';

interface VerticalCountrySelector {
  countries: string[];
}

const VerticalCountrySelector = ({ countries }: VerticalCountrySelector) => {
  const [activeFlag, setActiveFlag] = useState<string>();

  const handleFlagSelect = (country: string) => {
    setActiveFlag(country);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: 8,
        alignItems: 'center',
        marginTop: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3',
        paddingBottom: 10,
      }}
    >
      {countries.map((country, i) => (
        <>
          <FlagIcon
            onPress={() => handleFlagSelect(country)}
            style={{
              borderRadius: 9999,
              overflow: 'hidden',
              width: 32,
              height: 32,
              opacity: activeFlag === country ? 1 : 0.25,
              borderWidth: activeFlag === country ? 0 : 2,
              borderColor: 'white',
            }}
            country={country}
          />
          {Boolean(i + 1 < countries.length) && (
            <Icon color="#CDCDCD" name="arrow-back" />
          )}
        </>
      ))}
    </View>
  );
};

export default VerticalCountrySelector;
