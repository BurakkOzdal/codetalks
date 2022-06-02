import { StyleSheet } from 'react-native'
import colors from '../../styles/color'

export default StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    inner_container:{
        marginVertical:20,
        borderStyle:"dotted",
        borderWidth:2,
        borderColor:colors.secondaryOrange,
        borderRadius:10,
        alignItems:"center",
    },
    title:{
        fontSize:25,
        color:colors.secondaryOrange
    }
})