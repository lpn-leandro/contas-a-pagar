import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import FormButton from '../../components/form/FormButton';
import FormInput from '../../components/form/FormInput';
import { Picker } from '@react-native-picker/picker';

export default function registerBill() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [due_date, setDueDate] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const [status, setStatus] = useState();

  return (
    <View className='self-center max-w-[100%] max-h-[100%] w-full h-full bg-white p-4'>
      <Text className='text-left font-semibold text-xl mb-4'>
        Nova conta a pagar
      </Text>

      <FormInput label='Nome:' value={name} onChangeText={setName} />

      <FormInput label='Valor:' value={value} onChangeText={setValue} />

      <FormInput
        label='Data de Nascimento:'
        value={due_date}
        onChangeText={setDueDate}
      />

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
        label='Descrição:'
        value={description}
        onChangeText={setDescription}
      />

      <FormButton
        title='Criar'
        onPress={() => {
          router.back();
        }}
      />
    </View>
  );
}
