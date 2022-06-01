import {Formik} from 'formik';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as Yup from 'yup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import auth from '@react-native-firebase/auth';
import styles from './Login.style';
import {showMessage} from 'react-native-flash-message';

const initialValues = {
  username: '',
  password: '',
};

const formValidation = Yup.object().shape({
  username: Yup.string()
    .required('Zorunlu alan!!')
    .email('E-posta formatına uymuyor'),

  password: Yup.string()
    .required('Zorunlu alan!!')
    .min(6, ({min}) => `Şifre en az ${min} kadar olmalı`),
});

function Login({navigation}) {
  const handleSign = () => {
    navigation.navigate('SignPage');
  };

  async function handleLogin(formValues) {
    
    try {
      await auth().signInWithEmailAndPassword(
        formValues.username,
        formValues.password,
      );
      showMessage({
        message: 'Hoş Geldiniz',
        type: 'success',
      });
      navigation.navigate('MessageStack', {screen: 'MRoomsPage'});

    } catch (error) {
      showMessage({
        message: error.code,
        type:"danger"
      })
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.conrainer}>
      <Text style={styles.title}>codetalks</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={formValidation}>
        {({values, handleChange, handleSubmit, errors, touched}) => (
          <>
            <Input
              value={values.username}
              placeholder="e-postanızı giriniz.."
              onChangeText={handleChange('username')}
            />
            {errors.username && touched.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}

            <Input
              value={values.password}
              placeholder="şifrenizi giriniz.."
              onChangeText={handleChange('password')}
              isSecure
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Button onPress={handleSubmit} title="Giriş Yap" />
            <Button onPress={handleSign} title="Kaydol Ol" theme="secondary" />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Login;
