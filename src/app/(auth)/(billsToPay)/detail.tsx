import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router, Stack, useGlobalSearchParams } from 'expo-router';
import HeaderWithHamburguer from '../../../components/headers/HeaderWithHamburguer';
import { data } from '../../../../mocks/data';
import FormButton from '../../../components/form/FormButton';

export default function BillDetails() {
  const { id } = useGlobalSearchParams();

  // Find the bill by id
  const bill = data.find((item) => String(item.id) === String(id));

  return (
    <View className='m-5'>
      <Stack.Screen
        options={{
          title: 'Bill',
          headerRight: () => (
            <HeaderWithHamburguer
              title=''
              optionsProps={['Perfil', 'Logout', 'Cancelar']}
              destructiveButtonIndex={1}
              cancelButtonIndex={2}
            />
          ),
        }}
      />

      <Text className='text-center font-semibold text-xl'>
        {bill?.title ?? 'N/A'}
      </Text>

      <View className=''>
        <TouchableOpacity className='mt-4 bg-[#0F172A] rounded-md h-[2.5rem] w-[20%] max-h-[50%]'>
          <Text
            className='text-white m-auto text-base'
            onPress={() => {
              router.navigate({
                pathname: '/(billsToPay)/editBill/',
                params: { id: bill?.id, title: bill?.title },
              });
            }}
          >
            EDITAR
          </Text>
        </TouchableOpacity>
      </View>

      <View className=''>
        <Text className='font-semibold text-base'>Descrição</Text>
        <Text className=''>{bill?.description ?? 'N/A'}</Text>
        <View className='flex-wrap flex-row mt-4 justify-stretch gap-[10%]'>
          <View className=''>
            <Text className='font-semibold text-base'>Valor</Text>
            <Text>R$ {bill?.value ?? 'N/A'}</Text>
          </View>
          <View className=''>
            <Text className='font-semibold text-base'>Data de Vencimento</Text>
            <Text>{bill?.due_date ?? 'N/A'}</Text>
          </View>
        </View>
      </View>
      <View>
        <FormButton
          title='MARCAR COMO PAGO'
          onPress={() => {
            // Marcar como pago
          }}
        />
      </View>
    </View>
  );
}
