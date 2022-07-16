import { useLayoutEffect } from "react"
import { goToLogin } from "../routes/coordinatior"
import {useNavigate} from 'react-router-dom';


export const useProtedtedPage = ()=>{

    const navigate= useNavigate()
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if (!token){
            goToLogin(navigate)
        }
    }, [navigate])
}