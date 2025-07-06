import { View, Text, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import BillRepository, { Bill } from '../../database/BillRepository';

type StatusFilter = 'all' | 'paid' | 'unpaid';

type BillListProps = {
  statusFilter?: StatusFilter;
};

const repository = new BillRepository();

export default function BillList({ statusFilter = 'all' }: BillListProps) {
  const [bills, setBills] = useState<Bill[]>([]);

  const loadBills = async () => {
    const allBills = await repository.all();

    const filteredBills = allBills.filter((bill) => {
      if (statusFilter === 'paid') return bill.is_paid;
      if (statusFilter === 'unpaid') return !bill.is_paid;
      return true;
    });
    setBills(filteredBills);
  };

  useEffect(() => {
    loadBills();
  }, [statusFilter]);

  return (
    <View className='m-4'>
      <View className='flex flex-row mb-6'>
        <Text className='text-left font-semibold text-base basis-3/5'>
          Título
        </Text>
        <Text className='text-center font-semibold text-base basis-1/5'>
          Data
        </Text>
        <Text className='text-center font-semibold text-base basis-1/5'>
          Valor
        </Text>
      </View>

      {bills.map((bill, id) => (
        <Link
          key={id}
          href={{
            pathname: '/(billsToPay)/detail/',
            params: { id, is_paid: bill.is_paid ? 'true' : 'false' },
          }}
          asChild
        >
          <Pressable className='flex flex-row mb-3 border-slate-300 border-b h-[3rem]'>
            <View className='basis-3/5 self-center'>
              <Text className='text-left font-semibold text-base'>
                {bill.title}
              </Text>
              <Text className='text-xs text-gray-500' numberOfLines={1}>
                {bill.description}
              </Text>
            </View>

            <Text className='text-center font-semibold text-base basis-1/5 self-center'>
              {bill.due_date.toString().substring(5, 10)}
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
