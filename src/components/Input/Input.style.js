import { StyleSheet } from "react-native";
import colors from "../../styles/color";

export default StyleSheet.create({
    container:{
        margin:10,
        padding:5,
        backgroundColor:colors.primaryOrange,
        borderRadius:8,
        flexDirection:"row",
        alignItems:"center",
        borderBottomColor:"white",
        borderBottomWidth:1
    },
    input:{
        flex:1,
        color:"white"
    }
})