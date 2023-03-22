import axios from "axios"
export const getAllPizzas=()=>async dispatch=>{
       dispatch({type:'GER_PIZZAS_REQUEST'}) 
    
    try {
        const response = await axios.get('/getpizzas')
        console.log(response)
        dispatch({type:'GER_PIZZAS_SUCCESS', payload: response.data})
    } catch (error) {
        dispatch({type:'GER_PIZZAS_ERROR',payload:error})
    }
}