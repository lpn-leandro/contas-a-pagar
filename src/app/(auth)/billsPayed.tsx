import React from 'react';
import Scrollable from '../../components/containers/Scrollable';
import HeaderWithHamburguer from '../../components/headers/HeaderWithHamburguer';
import BillList from '../../components/list/BillList';
import { Text } from 'react-native';

export default function BillsPayed() {
  return (
    <Scrollable>
      <HeaderWithHamburguer
        title='Home'
        optionsProps={['Perfil', 'Logout', 'Cancelar']}
        destructiveButtonIndex={1}
        cancelButtonIndex={2}
      />
      <Text className='text-left font-semibold text-xl mb-4'>Contas Pagas</Text>
      <BillList statusFilter='paid' />
    </Scrollable>
  );
}
