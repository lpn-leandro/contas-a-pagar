import { Text, View } from 'react-native';
import React from 'react';
import Scrollable from '../../../components/containers/Scrollable';
import HeaderWithHamburguer from '../../../components/headers/HeaderWithHamburguer';
import BillList from '../../../components/list/BillList';
import FormButton from '../../../components/form/FormButton';
import { router } from 'expo-router';

export default function home() {
  return (
    <Scrollable>
      <HeaderWithHamburguer
        title='Home'
        optionsProps={['Perfil', 'Logout', 'Cancelar']}
        destructiveButtonIndex={1}
        cancelButtonIndex={2}
      />
      <Text className='text-left font-semibold text-xl mb-4'>
        Contas a Pagar
      </Text>
      <BillList statusFilter='unpaid' />
      <View className='w-[60%] absolute bottom-[20%] left-[20%] right-[20%]'>
        <FormButton
          title='NOVA CONTA'
          onPress={() => {
            router.navigate('/registerBill/');
          }}
        />
      </View>
    </Scrollable>
  );
}
