
import React, {memo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Color, Fonts, moderateScale } from '../utils/Themes';
import { LockIcon } from '../assest/icons';

const BaseTextInput = ({
  inputRef,
  CountryValue,
  onSubmitEditing,
  returnKeyLabel,
  returnKeyType,
  value,
  onSubmit,
  keyboard = 'default',
  placeholder,
  onChange,
  maxLength = undefined,
  minLength = undefined,
  isSecured = false,
  multiline = false,
  autoCapitalize = 'none',
  externelStyle = {},
  label,
  require
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hide, setHide] = useState(isSecured);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const textInputStyle = {
    
    ...styles.containerTextStyle,
    textAlignVertical: multiline ? 'top' : 'auto',
    height: multiline ? moderateScale(219) : moderateScale(50),
    borderColor: isFocused ? Color.DarkGray : Color.DefaultColor,
  };

  if (isSecured) {
    textInputStyle.flex = 0.9;
  } else {
    textInputStyle.flex = 1;
  }
  return (
    <View>
    <View>
    <Text
        style={{
          color: '#000000',
          fontFamily: Fonts.Jost_Medium,
          fontSize: 16,
          marginHorizontal: 20,
        }}>
        {label}
        <Text style={{color:'#DB3838'}}>{require}</Text>
      </Text>
    </View>
      <View
        style={[
          styles.container,
          {
            borderWidth: isFocused ? moderateScale(1) : moderateScale(1),

            paddingTop: multiline ? moderateScale(6) : 0,
          },
          externelStyle,
        ]}>
        <Text
          style={{
            fontSize: moderateScale(15),
            color:"#5B5B5B",
            alignSelf: 'center',
            justifyContent: 'center',
            fontFamily: Fonts.Bold,
            marginHorizontal:5
          }}>
          {CountryValue}
        </Text>

        <TextInput
          onSubmitEditing={() => {
            if (onSubmitEditing) {
              onSubmitEditing();
            }
            if (returnKeyType === 'next' && inputRef && inputRef.current) {
              inputRef.current.focus();
            }
          }}
          maxLength={maxLength}
          
          ref={inputRef}
          value={value}
          keyboardType={keyboard}
          onChangeText={onChange}
          minLength={minLength}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={'#ACACAC'}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          secureTextEntry={hide}
          style={textInputStyle}
         
          color={'#000000'}
        />
         {
                (isSecured) ?
                    <TouchableOpacity
                        style={{ position: 'absolute', right: moderateScale(15), alignSelf: 'center' }}
                        onPress={() => setHide(!hide)}
                        activeOpacity={0.4}
                        accessibilityRole={'button'}
                    >
                        {
                            (hide) ? <LockIcon width={moderateScale(22)} height={moderateScale(22)} /> : <LockIcon width={moderateScale(24)} height={moderateScale(24)} />
                        }
                    </TouchableOpacity>
                    :
                    null
            }
      </View>
    </View>
  );
};

export default memo(BaseTextInput);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    marginVertical: moderateScale(8),
    borderRadius: moderateScale(8),
    borderColor: "#BAB9B9",
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '90%',
    alignSelf: 'center',
  },
  leftIconContainer: {
    paddingRight: moderateScale(5),
    alignSelf: 'center',
  },
  containerTextStyle: {
    fontSize: moderateScale(15),
    color: Color.Black,
    flex: 1,
    fontFamily: Fonts.Jost_Regular,
  },
});
