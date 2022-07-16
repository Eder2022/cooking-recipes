

import { useLayoutEffect } from "react"
import { goToRecipeList } from "../routes/coordinatior"
import {useNavigate} from 'react-router-dom';


export const useUnProtedtedPage = ()=>{

    const navigate= useNavigate()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if (token){
            goToRecipeList(navigate)
        }
    }, [navigate])
}