import { StyleSheet } from 'react-native'
import colors from '../../styles/color'


export default StyleSheet.create({
    container:{
        position:"absolute",
        backgroundColor:colors.secondaryOrange,
        bottom:100,
        right:20,
        borderRadius:50,
        width:60,
        height:60,
        justifyContent:"center",
        alignItems:"center"
    }
})