import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Provider,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
} from '@react-native-material/core';
import {green} from '../../assets/utils';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ModalRegister({
  navigation,
  Children = () => <Text>Template me</Text>,
  visible,
  setVisible,
  HeaderTemplate = () => (
    <View
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        height: 40,
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 17, fontWeight: 'bold', color: green}}>
        Account Is Approve
      </Text>
    </View>
  ),
  ContentTemplate = () => (
    <View
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 10,
        alignItems: 'center',
      }}>
      <MaterialComunity
        name="email-check"
        size={40}
        style={{marginBottom: 20}}
        color={green}
      />
      <Text>Please Confirm Your Email</Text>
    </View>
  ),
  ActionTemplate = () => <Text>template me</Text>,
}) {
  return (
    <>
      <Children />
      <Dialog visible={visible}>
        <HeaderTemplate />
        <DialogContent>
          <ContentTemplate />
        </DialogContent>
        <DialogActions>
          <ActionTemplate />
        </DialogActions>
      </Dialog>
    </>
  );
}
