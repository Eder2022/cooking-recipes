import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './HeaderStyled';
import { goToLogin, goToRecipeList } from '../../routes/coordinatior';
import {useNavigate} from 'react-router-dom';


export default function Header({rightButtonText, setrightButtonText}) {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    // const [rightButtonText, setrightButtonText ]= React.useState(token ? 'Sair' : 'Login')
    const logut= ()=>{
      localStorage.removeItem('token')
    }

    const rightButtonAction=()=>{
      if (token){
        logut()
        setrightButtonText('Login')
        goToLogin(navigate)
      } else {
        goToLogin(navigate)
      }
    }
  return (

      <AppBar position="static">
        <StyledToolbar>
         
          <Button onClick={()=>goToRecipeList(navigate)} color="inherit"> Receitas do Povo Brasileiro</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
    
  );
}
