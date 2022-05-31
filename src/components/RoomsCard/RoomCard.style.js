import { StyleSheet } from 'react-native'
import colors from "../../styles/color"

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:"#aeaeae",
        borderRadius:8,
        width:170,
        height:180,
        justifyContent:"center",
        margin:12
    },
    title:{
        fontSize:40,
        color: colors.secondaryOrange,
        alignSelf:"center"
    }
})