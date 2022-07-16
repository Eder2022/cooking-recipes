
import { Button, CircularProgress, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"

import { useUnProtedtedPage } from "../../hooks/useUnprotectedPage"
import { goToRecipeList } from "../../routes/coordinatior"
import { signUp } from "../../services/user"
import { InputsContainer } from "../LoginPage/LoginStyled"
import { ScreenContainer } from "./SignStyled"






export const SignUpPage = ({setrightButtonText})=>{
    useUnProtedtedPage()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [form, onChange, clear] = useForm({name:'', email:"", password:""})
    const onSubmitForm = (event) =>{
        event.preventDefault()
        signUp(form, clear, navigate,setrightButtonText,setIsLoading)
    }
    return(
        <>
        <ScreenContainer>
        <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"}
                    />
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
                    color={"primary"}
                    onClick={()=>goToRecipeList()}
                    >{isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Cadastrar</>}</Button>
                </form>
            </InputsContainer></ScreenContainer>
        </>
    )
}