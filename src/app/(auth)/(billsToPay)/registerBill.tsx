import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import FormButton from '../../../components/form/FormButton';
import FormInput from '../../../components/form/FormInput';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function registerBill() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [due_date, setDueDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [description, setDescription] = useState('');
  const router = useRouter();
  const [status, setStatus] = useState();

  return (
    <View className='self-center max-w-[100%] max-h-[100%] w-full h-full bg-white p-4'>
      <Text className='text-left font-semibold text-xl mb-4'>
        Nova conta a pagar
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
        <FormInput
          label='Data de vencimento:'
          placeholder='20/01/2022'
          value={due_date}
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
          selectedValue={status}
          onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
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
        <FormButton
          title='Criar'
          onPress={() => {
            router.back();
          }}
        />
      </View>
    </View>
  );
}
