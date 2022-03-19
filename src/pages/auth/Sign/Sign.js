import { Formik } from "formik";
import React from "react";
import {SafeAreaView, Text, Button} from "react-native";
import { showMessage } from "react-native-flash-message";
import Input from "../../../components/Input"


const initialFormValues={
    username:"",
    password:"",
    repassword:"",
}
function Sign() {


    function handleFormSubmit(formValues) {
        if (formValues.username) {
            
            showMessage({
                message:"Başarılı",
                type:"warning"
            })
        }else{
            showMessage({
                message:"boş bırakılamaz",
                type:"danger"
            })
        }
        console.log(formValues)
    }

    return(

        <SafeAreaView>
            <Text> Code Talks Kaydol </Text>
            
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({values, handleChange, handleSubmit})=>(
                        <>
                            <Input placeholder="e-posta giriniz" value={values.username} onChangeText={handleChange('username')} />
                            <Input placeholder="Şifrenizi giriniz" value={values.password} onChangeText={handleChange('password')} isSecure/>
                            <Input placeholder="Şifrenizi Tekrar giriniz" value={values.repassword} onChangeText={handleChange('repassword')} isSecure/>
                            <Button title="Kayıt Ol" onPress={handleSubmit}/>
                        </>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default Sign