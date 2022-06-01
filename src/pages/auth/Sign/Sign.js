import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {showMessage} from 'react-native-flash-message';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import auth from "@react-native-firebase/auth"
import styles from './Sign.style';

const initialFormValues = {
  username: '',
  password: '',
  repassword: '',
};

const formValidation = Yup.object().shape({
  username: Yup.string().required('Boş Bırakılamaz').email("E-posta formatına uymuyor"),

  password: Yup.string()
    .required('Boş Bırakılamaz')
    .min(6, ({min}) => `Şifre en az ${min} kadar olmalı`),

  repassword: Yup.string()
    .required('Boş Bırakılamaz')
    .oneOf([Yup.ref('password'), null], 'Şifreler Uyuşmuyor')
    .min(6, ({min}) => `Şifre en az ${min} kadar olmalı`),
});
function Sign({navigation}) {
  
 async function handleFormSubmit(formValues) {
   
   console.log(formValues);
    try {
      await auth().createUserWithEmailAndPassword(formValues.username,formValues.password)
      navigation.navigate('MessageStack', {screen: 'MRoomsPage'})

      showMessage({
        type:"success",
        message:"Hoş Geldiniz"
      })

    } catch (error) {
      showMessage({
        type:"danger",
        message:error.code
      })
      console.log(error)
    }
    

    
  }

  return (
    <SafeAreaView style={styles.conrainer}>
      <Text style={styles.title}>codetalks</Text>

      <Formik
        initialValues={initialFormValues}
        onSubmit={handleFormSubmit}
        validationSchema={formValidation}>
        {({values, handleChange, handleSubmit, errors, touched}) => (
          <>
            <Input
              placeholder="e-posta giriniz.."
              value={values.username}
              onChangeText={handleChange('username')}
            />
            {errors.username && touched.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}

            <Input
              placeholder="Şifrenizi giriniz.."
              value={values.password}
              onChangeText={handleChange('password')}
              isSecure
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Input
              placeholder="Şifrenizi Tekrar giriniz.."
              value={values.repassword}
              onChangeText={handleChange('repassword')}
              isSecure
            />
            {errors.repassword && touched.repassword && (
              <Text style={styles.error}>{errors.repassword}</Text>
            )}

            <Button title={'Kayıt Ol'} onPress={handleSubmit} />
            <Button
              title={'Geri Dön'}
              theme="secondary"
              onPress={() => navigation.goBack()}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Sign;
