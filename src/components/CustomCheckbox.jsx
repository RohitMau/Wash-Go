import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { Fonts, moderateScale } from '../utils/Themes';

const CustomCheckbox = ({label,label1, onChange, checked}) => {
  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity
        onPress={() => onChange(!checked)}
        style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>
      {label && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.label,{color:'#000'}]}>{label}</Text>
          <Text style={[styles.label,{color:'gray'}]}>{label1}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#797979',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius:4,
    
    alignSelf:'center',
  },
  checked: {
    backgroundColor: '#FFF',
    
  },
  checkmark: {
    color: '#000',
    fontSize: 12,
   
  },
  label: {
    fontSize:moderateScale(14),
    fontFamily:Fonts.PoppinsBlack
  },
});
