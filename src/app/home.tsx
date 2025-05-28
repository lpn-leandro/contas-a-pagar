import { Text, View } from 'react-native';
import React from 'react';
import Scrollable from '../components/containers/Scrollable';
import HeaderWithHamburguer from '../components/headers/HeaderWithHamburguer';
import FormButton from '../components/form/FormButton';
import { data } from '../../mocks/data';

export default function home() {
  return (
    <Scrollable>
      <HeaderWithHamburguer
        title='Home'
        optionsProps={['Perfil', 'Logout', 'Cancelar']}
        destructiveButtonIndex={1}
        cancelButtonIndex={2}
      />

      <View className='m-4'>
        <Text className='text-left font-semibold text-xl mb-4'>
          {' '}
          Contas a Pagar
        </Text>

        <View className='flex flex-row mb-6'>
          <Text className='text-left font-semibold text-base basis-4/6'>
            Titulo
          </Text>
          <Text className='text-left font-semibold text-base basis-1/6'>
            Data
          </Text>
          <Text className='text-left font-semibold text-base basis-1/6'>
            Valor
          </Text>
        </View>
        {data.map((bill, index) => (
          <View
            key={index}
            className='flex flex-row mb-3 border-slate-300 border-b h-[3rem]'
          >
            <View className='basis-4/6 align-middle'>
              <Text key={index} className='text-left font-semibold text-base'>
                {bill.title}
              </Text>
              <Text className='text-sm text-gray-500'>
                Essa é uma descrição teste
              </Text>
            </View>

            <Text className='text-left font-semibold text-base basis-1/6 align-middle'>
              {bill.due_date.slice(0, 5)}
            </Text>
            <Text className='text-left font-semibold text-base basis-1/6 align-middle'>
              {bill.value}
            </Text>
          </View>
        ))}

        <FormButton className='fixed bottom-0 left-0' title='Login' />
      </View>
    </Scrollable>
  );
}
