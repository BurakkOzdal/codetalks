import { StyleSheet } from 'react-native'
import color from "../../styles/color"

export default StyleSheet.create({
    container:{
        backgroundColor:color.secondaryOrange,
        borderRadius:10,
        padding:10
    },
    inner_container:{
        flexDirection:"row",
    },
    title:{
        flex:1,
        color:"white",
        fontSize:18,
    },
    date:{
        color:"white",
        fontSize:17,
        fontStyle:"italic"
    },
    message:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginTop:10
    }
})