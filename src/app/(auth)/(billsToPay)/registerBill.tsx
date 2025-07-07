import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import FormButton from '../../../components/form/FormButton';
import FormInput from '../../../components/form/FormInput';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import BillRepository from '../../../database/BillRepository';

const billRepository = new BillRepository();

export default function registerBill() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [due_date, setDueDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [description, setDescription] = useState('');
  const router = useRouter();
  const [status, setStatus] = useState<boolean>(false);

  const create = async (): Promise<boolean> => {
    const billData = {
      title: title.trim(),
      value: parseFloat(value),
      due_date: date.toISOString(),
      is_paid: status,
      description: description.trim(),
    };
    const id = await billRepository.create(billData);

    if (id) {
      Alert.alert('Sucesso', 'Conta criada com sucesso!', [
        {
          text: 'OK',
          onPress: () => {
            router.replace('/(auth)/(billsToPay)');
          },
        },
      ]);
      return true;
    } else {
      Alert.alert('Erro', 'Não foi possível criar a conta. ID inválido.');
      return false;
    }
  };

  return (
    <View className='self-center max-w-[100%] max-h-[100%] w-full h-full bg-white p-4'>
      <Text className='text-left font-semibold text-xl mb-4'>
        Nova conta a pagar
      </Text>

      <FormInput
        placeholder='Conta de Luz'
        label='Nome:'
        value={title}
        onChangeText={setTitle}
      />

      <FormInput
        placeholder='R$ 200'
        label='Valor:'
        keyboardType='numeric'
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
          selectedValue={status ? '1' : '0'}
          onValueChange={(itemValue, itemIndex) => setStatus(itemValue === '1')}
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
          onPress={async () => {
            const success = await create();
            if (success) router.back();
          }}
        />
      </View>
    </View>
  );
}
