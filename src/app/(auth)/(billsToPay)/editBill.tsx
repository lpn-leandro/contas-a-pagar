import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import FormButton from '../../../components/form/FormButton';
import FormInput from '../../../components/form/FormInput';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import BillRepository, { Bill } from '../../../database/BillRepository';

const billRepository = new BillRepository();

export default function editBill() {
  const { id } = useGlobalSearchParams();
  const router = useRouter();

  console.log('params', id);

  const [bill, setBill] = useState<Bill | null>(null);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [due_date, setDueDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<string>('0');

  useEffect(() => {
    loadBill();
  }, [id]);

  const loadBill = async () => {
    if (!id || Array.isArray(id)) return;

    const foundBill = await billRepository.getById(parseInt(id));
    if (foundBill) {
      setBill(foundBill);
      setName(foundBill.title);
      setValue(foundBill.value.toString());
      setDescription(foundBill.description || '');
      setStatus(foundBill.is_paid ? '1' : '0');
      let billDate = new Date(foundBill.due_date);
      setDate(new Date(foundBill.due_date));
      setDueDate(billDate.toLocaleDateString());
    }
  };

  const updateBill = async () => {
    if (!bill?.id) return;

    const updatedBill: Bill = {
      id: bill.id,
      title: name,
      value: parseFloat(value),
      due_date: date.toISOString(),
      is_paid: status === '1',
      description: description,
    };

    const success = await billRepository.update(bill.id, updatedBill);
    if (success) {
      router.back();
    }
  };

  return (
    <View className='self-center max-w-[100%] max-h-[100%] w-full h-full bg-white p-4'>
      <Text className='text-left font-semibold text-xl mb-4'>
        Editar conta a pagar
      </Text>

      <FormInput
        placeholder='Conta de Luz'
        label='Nome:'
        value={name}
        onChangeText={setName}
      />

      <FormInput
        placeholder='R$ 200'
        label='Valor:'
        value={value}
        onChangeText={setValue}
      />

      <View className='mb-3'>
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <FormInput
            label='Data de vencimento:'
            value={due_date}
            editable={false}
          />
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode='date'
            display='spinner'
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || date;
              setShowPicker(false);
              setDate(currentDate);
              setDueDate(currentDate.toLocaleDateString());
            }}
          />
        )}
      </View>

      <Text className='text-base mb-1 strong'>Status da conta:</Text>
      <View className='mb-3 border-slate-300 border rounded-lg max-w-full max-h-full h-13'>
        <Picker
          selectedValue={status}
          onValueChange={(itemValue) => setStatus(itemValue)}
        >
          <Picker.Item label='A pagar' value='0' />
          <Picker.Item label='Pago' value='1' />
        </Picker>
      </View>

      <FormInput
        placeholder='Insira uma breve descrição sobre a conta'
        label='Descrição:'
        value={description}
        onChangeText={setDescription}
      />

      <View className='flex-1 justify-end mb-4'>
        <FormButton title='SALVAR' onPress={updateBill} />
      </View>
    </View>
  );
}
