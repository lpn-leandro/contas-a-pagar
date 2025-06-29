import { View, Text } from 'react-native';
import React from 'react';
import { Stack, useGlobalSearchParams } from 'expo-router';
import HeaderWithHamburguer from '../../components/headers/HeaderWithHamburguer';
import { data } from '../../../mocks/data';
import FormButton from '../../components/form/FormButton';

export default function BillDetails() {
  const { id } = useGlobalSearchParams();

  // Find the bill by id
  const bill = data.find((item) => String(item.id) === String(id));

  return (
    <View style={{ margin: 10 }}>
      <Stack.Screen
        options={{
          title: 'Bill',
          headerRight: () => (
            <HeaderWithHamburguer
              title='Home'
              optionsProps={['Perfil', 'Logout', 'Cancelar']}
              destructiveButtonIndex={1}
              cancelButtonIndex={2}
            />
          ),
        }}
      />

      <Text className=''>{bill?.title ?? 'N/A'}</Text>

      <FormButton
        title='Editar'
        onPress={() => {
          // Ir para a tela de edição de conta
        }}
      />

      <View>
        <Text>Descrição</Text>
        <Text>Name: {bill?.description ?? 'N/A'}</Text>
        <View>
          <View>
            <Text>Valor</Text>
            <Text>R$ {bill?.value ?? 'N/A'}</Text>
          </View>
          <View>
            <Text>Data de Vencimento</Text>
            <Text>{bill?.due_date ?? 'N/A'}</Text>
          </View>
        </View>
      </View>
      <FormButton
        title='Excluir'
        onPress={() => {
          // Marcar como pago
        }}
      />
    </View>
  );
}
