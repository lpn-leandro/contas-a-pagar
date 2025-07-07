import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router, Stack, useGlobalSearchParams } from 'expo-router';
import HeaderWithHamburguer from '../../../components/headers/HeaderWithHamburguer';
import FormButton from '../../../components/form/FormButton';
import BillRepository, { Bill } from '../../../database/BillRepository';

const repository = new BillRepository();

export default function BillDetails() {
  const { id } = useGlobalSearchParams();
  const [bill, setBill] = useState<Bill>();

  useEffect(() => {
    loadBill();
  }, [id]);

  const loadBill = async () => {
    const foundBill = await repository.getById(Number(id));

    if (foundBill) setBill(foundBill);
  };

  if (!bill) {
    return;
  }

  return (
    <View className='m-5'>
      <Stack.Screen
        options={{
          title: 'Detalhes da Conta',
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

      <Text className='text-center font-semibold text-xl mb-4'>
        {bill.title}
      </Text>

      <View className='mb-4'>
        <TouchableOpacity
          className='bg-[#0F172A] rounded-md h-[2.5rem] w-[20%] justify-center'
          onPress={() => {
            router.navigate({
              pathname: '/(auth)/(billsToPay)/editBill/',
              params: { id: bill.id?.toString() },
            });
          }}
        >
          <Text className='text-white text-center text-base font-semibold'>
            EDITAR
          </Text>
        </TouchableOpacity>
      </View>

      <View className='mb-6'>
        <Text className='font-semibold text-base mb-2'>Descrição</Text>
        <Text className='text-gray-700'>{bill.description}</Text>
      </View>

      <View className='flex-row justify-between mb-6'>
        <View className='flex-1 mr-4'>
          <Text className='font-semibold text-base mb-1'>Valor: </Text>
          <Text className='text-lg font-bold text-green-600'>
            R$ {bill.value}
          </Text>
        </View>
        <View className='flex-1'>
          <Text className='font-semibold text-base mb-1'>
            Data de Vencimento
          </Text>
          <Text className='text-lg'>
            {bill.due_date.toString().substring(0, 10)}
          </Text>
        </View>
      </View>

      <View className=''>
        <FormButton title='MARCAR COMO PAGO' />
      </View>
    </View>
  );
}
