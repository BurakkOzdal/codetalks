import { StyleSheet } from 'react-native'
import colors from '../../styles/color'

const base_style= StyleSheet.create({
    container:{    
        padding:6,
        margin:15,
        borderRadius:10,
        alignItems:"center",
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
    }
})

export default ({
    primary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
      backgroundColor: colors.secondaryOrange,
      },
      title:{
        ...base_style.title,
        color:"white"
      }
    }),

    secondary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor: 'white',
        },
        title:{
            ...base_style.title,
            color: colors.secondaryOrange,
        }
    })

})
