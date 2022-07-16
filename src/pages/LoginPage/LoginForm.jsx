import React, { useState } from "react"
import { InputsContainer } from "./LoginStyled"
import { Button, CircularProgress, TextField } from "@mui/material";
import {useForm} from "../../hooks/useForm"
import { login } from "../../services/user";
import {useNavigate} from 'react-router-dom';
import { goToLogin } from "../../routes/coordinatior";
import { useUnProtedtedPage } from "../../hooks/useUnprotectedPage";
import { useProtedtedPage } from "../../hooks/useProtectedPage";

const LoginForm = ({setrightButtonText})=>{
    useUnProtedtedPage()
    useProtedtedPage()
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({email:"", password:""})
    const [isLoading, setIsLoading] = useState(false)
    const onSubmitForm = (event) =>{
        event.preventDefault()
        login(form, clear, navigate, setrightButtonText,setIsLoading)
    }

    // const login = ()=>{
    //     axios.post(`${BASE_URL}/user/login`, form)
    //     .then((res)=>{
    //         localStorage.setItem('token', res.data.token)
    //         console.log(res)
    //         clear()
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }
    return(
              <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                    />
                    <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    fullWidth
                    margin={"normal"}
                    label={"Senha"}
                    variant={"outlined"}
                    required
                    type={"password"}
                    pattern={'^.{6,}$'}
                    title={'A senha deve ter no minimo 6 caracteres.'}
                    />
                    <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}>
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>}</Button>
                </form>
            </InputsContainer>
    )
}
export default LoginForm