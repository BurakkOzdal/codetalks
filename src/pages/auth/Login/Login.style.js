import { StyleSheet } from 'react-native'
import colors from '../../../styles/color'

export default StyleSheet.create({
    conrainer:{
        flex:1,
        backgroundColor: colors.primaryOrange
    },
    title:{
        alignSelf:"center",
        color:"white",
        fontSize:30,
        marginVertical:100
    },
    error:{
        color:'white',
        alignSelf:"center",
        fontSize:17,
        marginTop:5,
    }
})