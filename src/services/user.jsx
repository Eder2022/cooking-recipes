import axios from "axios";
import {BASE_URL} from '../constants/urls'
import { goToRecipeList } from "../routes/coordinatior";

export const login = (body, clear, navigate, setrightButtonText,setIsLoading)=>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res)=>{
        localStorage.setItem('token', res.data.token)
        console.log(res)
        clear()
        setIsLoading(false)
        goToRecipeList(navigate)
        setrightButtonText('Sair')
    }).catch((error)=>{
        console.log(error)
    })
}

export const signUp = (body, clear, navigate,setrightButtonText,setIsLoading)=>{
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res)=>{
        localStorage.setItem('token', res.data.token)
        console.log(res)
        clear()
        setIsLoading(false)
        goToRecipeList(navigate)
        setrightButtonText('Sair')
    }).catch((error)=>{
        console.log(error.response.data.message)
        
    })
}