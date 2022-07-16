import { Typography } from "@mui/material"
import { ErrorImage, ErrorPageContainer } from "./ErroStyled"
import error from '../../assets/error.png'

export const ErroPage = ()=>{

    return(
        <>
        <ErrorPageContainer>
            <ErrorImage src={error} />
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
        </ErrorPageContainer>
        
        </>
    )
}