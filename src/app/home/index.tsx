import { Text, View } from 'react-native';
import React from 'react';
import Scrollable from '../../components/containers/Scrollable';
import HeaderWithHamburguer from '../../components/headers/HeaderWithHamburguer';
import BillList from '../../components/list/BillList';
import FormButton from '../../components/form/FormButton';

export default function home() {
  return (
    <Scrollable>
      <HeaderWithHamburguer
        title='Home'
        optionsProps={['Perfil', 'Logout', 'Cancelar']}
        destructiveButtonIndex={1}
        cancelButtonIndex={2}
      />
      <BillList />
      <View className='w-[60%] absolute bottom-[8%] left-[20%] right-[20%]'>
        <FormButton title='NOVA CONTA' />
      </View>
    </Scrollable>
  );
}
