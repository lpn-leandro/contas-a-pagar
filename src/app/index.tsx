import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image } from 'react-native';
import FullScreen from '../components/containers/FullScreen';
import Card from '../components/containers/Card';
import FormInput from '../components/form/FormInput';
import FormButton from '../components/form/FormButton';
import './global.css';

export default function index() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'teste' && password === '123') router.push('#');
  };
  const handleRegister = () => {
    //router.push('');
  };

  return (
    <FullScreen>
      <Card>
        <Image
          className='w-[90%] h-[30%] max-w-full max-h-full mb-3'
          source={require('../../assets/adaptive-icon.png')}
        />
        <FormInput label='E-mail:' value={email} onChangeText={setEmail} />
        <FormInput
          label='Senha:'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <FormButton onPress={handleLogin} title='Login' />
        <FormButton onPress={handleRegister} title='Cadastre-se' />
      </Card>
    </FullScreen>
  );
}
