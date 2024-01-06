import { ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import FlagIcon from '../../common/FlagIcon';
import IconButton from '../../common/Buttons/IconButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface VerticalCountrySelector {
  countries: string[];
}

const VerticalCountrySelector = ({ countries }: VerticalCountrySelector) => {
  const [activeFlag, setActiveFlag] = useState<number>(0);

  const handleFlagSelect = (flagPos: number) => {
    setActiveFlag(flagPos);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3',
        paddingBottom: 10,
        width: '100%',
        position: 'relative',
        paddingRight: 16,
      }}
    >
      <ScrollView horizontal>
        {countries.map((country, i) => (
          <View
            key={i}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginRight: i === countries.length - 1 ? 32 : 0,
            }}
          >
            <FlagIcon
              onPress={() => handleFlagSelect(i)}
              style={{
                borderRadius: 9999,
                overflow: 'hidden',
                width: 32,
                height: 32,
                opacity: activeFlag === i ? 1 : 0.25,
                borderWidth: activeFlag === i ? 1 : 4,
                borderColor: activeFlag === i ? '#eee' : 'white',
              }}
              country={country}
            />
            {Boolean(countries.length !== i + 1) && (
              <MaterialCommunityIcons
                style={{ marginLeft: 4, marginRight: 4 }}
                color="#CDCDCD"
                name="arrow-left"
              />
            )}
          </View>
        ))}
      </ScrollView>

      <IconButton
        icon="plus"
        style={{
          position: 'absolute',
          right: 0,
          borderColor: 'white',
        }}
      />
    </View>
  );
};

export default VerticalCountrySelector;
