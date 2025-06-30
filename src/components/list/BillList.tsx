import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { data } from '../../../mocks/data';
import { Link } from 'expo-router';

export default function BillList() {
  return (
    <View className='m-4'>
      <Text className='text-left font-semibold text-xl mb-4'>
        Contas a Pagar
      </Text>
      <View className='flex flex-row mb-6'>
        <Text className='text-left font-semibold text-base basis-3/5'>
          Titulo
        </Text>
        <Text className='text-center font-semibold text-base basis-1/5'>
          Data
        </Text>
        <Text className='text-center font-semibold text-base basis-1/5'>
          Valor
        </Text>
      </View>

      {data.map((bill, index) => (
        <Link
          className='flex flex-row mb-3 border-slate-300 border-b h-[3rem]'
          key={index}
          href={{
            pathname: '/(billsToPay)/detail/',
            params: { ...bill, is_paid: bill.is_paid ? 'true' : 'false' },
          }}
        >
          <View className='basis-3/5 self-center'>
            <Text className='text-left font-semibold text-base'>
              {bill.title}
            </Text>
            <Text className='text-xs text-gray-500'>
              Essa é uma descrição teste
            </Text>
          </View>

          <Text className='text-center font-semibold text-base basis-1/5 self-center'>
            {bill.due_date.slice(0, 5)}
          </Text>
          <Text className='text-center font-semibold text-base basis-1/5 self-center'>
            R$ {bill.value}
          </Text>
        </Link>
      ))}
    </View>
  );
}
