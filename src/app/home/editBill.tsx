import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import FormButton from '../../components/form/FormButton';
import FormInput from '../../components/form/FormInput';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { data } from '../../../mocks/data';

export default function editBill() {
  const { id } = useGlobalSearchParams();

  console.log('params', id);

  const bill = data.find((item) => String(item.id) === String(id));

  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [due_date, setDueDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [description, setDescription] = useState('');
  const router = useRouter();
  const [status, setStatus] = useState<string>();

  return (
    <View className='self-center max-w-[100%] max-h-[100%] w-full h-full bg-white p-4'>
      <Text className='text-left font-semibold text-xl mb-4'>
        Editar conta a pagar
      </Text>

      <FormInput
        placeholder='Conta de Luz'
        label='Nome:'
        value={bill?.title}
        onChangeText={setName}
      />

      <FormInput
        placeholder='R$ 200'
        label='Valor:'
        value={bill?.value}
        onChangeText={setValue}
      />

      <View className='mb-3'>
        <FormInput
          label='Data de vencimento:'
          placeholder='20/01/2022'
          value={bill?.due_date}
          onChangeText={setDueDate}
          onFocus={() => setShowPicker(true)}
        />
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
          selectedValue={bill?.is_paid ? '1' : '0'}
          onValueChange={(itemValue, itemIndex) =>
            setStatus(bill?.is_paid ? '1' : '0')
          }
        >
          <Picker.Item label='A pagar' value='0' />
          <Picker.Item label='Pago' value='1' />
        </Picker>
      </View>

      <FormInput
        placeholder='Insira uma breve descrição sobre a conta'
        label='Descrição:'
        value={bill?.description}
        onChangeText={setDescription}
      />

      <View className='flex-1 justify-end mb-4'>
        <FormButton
          title='SALVAR'
          onPress={() => {
            router.back();
          }}
        />
      </View>
    </View>
  );
}
