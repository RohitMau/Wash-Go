import {Color, Fonts, moderateScale} from '../utils/Themes';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {EyeIcon, LockIcon} from '../assest/icons';

const BaseTextInput = ({
  inputRef,
  onSubmitEditing,
  returnKeyType,
  value,
  keyboard = 'default',
  placeholder,
  onChange,
  maxLength = undefined,
  minLength = undefined,
  isSecured = false,
  multiline = false,
  autoCapitalize = 'none',
  externelStyle = {},
  leftIcon = null,
  label,
  secureIcon = null, 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hide, setHide] = useState(isSecured);

  

  const toggleVisibility = () => {
    setHide(!hide);
  };

  const textInputStyle = {
    ...styles.containerTextStyle,
    textAlignVertical: multiline ? 'top' : 'auto',
    height: multiline ? moderateScale(115) : moderateScale(55),
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          {
            borderWidth: moderateScale(1),
            borderColor: Color.DarkGray,
            paddingTop: multiline ? moderateScale(6) : 0,
          },
          externelStyle,
        ]}>
        <View style={styles.leftIconContainer}>{leftIcon}</View>
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
          cursorColor={'#000'}
          ref={inputRef}
          value={value}
          keyboardType={keyboard}
          onChangeText={onChange}
          minLength={minLength}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={'gray'}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          secureTextEntry={hide}
          style={textInputStyle}
          color={'#5B5B5B'}
        />
        {secureIcon && (
          <TouchableOpacity
            style={styles.secureIconContainer}
            onPress={toggleVisibility}>
            {hide ? <EyeIcon /> : <LockIcon />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(5),
    borderColor: Color.DarkGray,
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  leftIconContainer: {
    paddingRight: moderateScale(5),
    alignSelf: 'center',
  },
  secureIconContainer: {
    paddingLeft: moderateScale(10),
  },
  secureIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  containerTextStyle: {
    fontSize: moderateScale(15),
    color: Color.BLACK,
    flex: 1,
    fontFamily: Fonts.SemiBold,
    fontStyle: 'italic',
  },
  label: {
    color: '#000000',
    fontFamily: Fonts.PoppinsMediam,
    fontSize: moderateScale(14),
    marginHorizontal: 20,
  },
});

export default BaseTextInput;
