import {  LogoImage, ScreenContainer, SignUpButtonContainer } from "./LoginStyled"
import logo from '../../assets/logo.png';
import { Button } from "@mui/material";

import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinatior";
import { useUnProtedtedPage } from "../../hooks/useUnprotectedPage";




export const LoginPage = ({ setrightButtonText}) => {
    useUnProtedtedPage()
    const navigate = useNavigate()

    return (
        <>
            <ScreenContainer>
                <LogoImage src={logo} />
               <LoginForm  setrightButtonText={setrightButtonText}/>
                <SignUpButtonContainer>
                    <Button 
                        onClick={()=>goToSignUp(navigate)}
                        type={'submit'}
                        fullWidth
                        variant={'text'}
                        color={'primary'}>
                        Não possui cadastro? Cadastre-se.
                    </Button>
                </SignUpButtonContainer>
            </ScreenContainer>
        </>
    )
}