import React from "react";
import { View, Text, Button } from "react-native"
function Login({ navigation }) {

    const handleSign = () => {
        navigation.navigate("SignPage")
    }

    const handleLogin = () => {
        navigation.navigate("MessageStack", { screen: "MRoomsPage" })
    }

    return (
        <View>
            <Text> Login Sayfası </Text>
            <Button onPress={handleSign} title="Kaydol" />
            <Button onPress={handleLogin} title="Giriş Yap" />
        </View>
    )
}

export default Login