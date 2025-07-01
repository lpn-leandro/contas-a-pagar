import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { data as allData } from '../../../mocks/data';
import { Link } from 'expo-router';

type StatusFilter = 'all' | 'paid' | 'unpaid';

type BillListProps = {
  statusFilter?: StatusFilter;
};

export default function BillList({ statusFilter = 'all' }: BillListProps) {
  const filteredData = allData.filter((bill) => {
    if (statusFilter === 'paid') return bill.is_paid;
    if (statusFilter === 'unpaid') return !bill.is_paid;
    return true;
  });

  return (
    <View className='m-4'>
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

      {filteredData.map((bill, id) => (
        <Link
          key={id}
          href={{
            pathname: '/(billsToPay)/detail/',
            params: { ...bill, is_paid: bill.is_paid ? 'true' : 'false' },
          }}
          asChild
        >
          <Pressable className='flex flex-row mb-3 border-slate-300 border-b h-[3rem]'>
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
          </Pressable>
        </Link>
      ))}
    </View>
  );
}
