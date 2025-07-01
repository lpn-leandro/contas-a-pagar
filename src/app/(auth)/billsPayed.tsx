import React from 'react';
import Scrollable from '../../components/containers/Scrollable';
import HeaderWithHamburguer from '../../components/headers/HeaderWithHamburguer';
import BillList from '../../components/list/BillList';

export default function BillsPayed() {
  return (
    <Scrollable>
      <HeaderWithHamburguer
        title='Contas Pagas'
        optionsProps={['Perfil', 'Logout', 'Cancelar']}
        destructiveButtonIndex={1}
        cancelButtonIndex={2}
      />
      <BillList statusFilter='paid' />
    </Scrollable>
  );
}
