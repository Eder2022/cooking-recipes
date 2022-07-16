


import { Routes, Route} from 'react-router-dom';

import { AddRecipePage } from '../pages/AddRecipesPage/AddRecipesPage';
import { ErroPage } from '../pages/ErroPage/ErroPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RecipeDetailsPage } from '../pages/RecipeDetailsPage/RecipeDetailsPage';
import { RecipeListPage } from '../pages/RecipesListPage/RecipesListPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';


export const Router = ({ setrightButtonText})=>{

    return(
        <>
        
        <Routes>
                <Route path='/Login' element={<LoginPage setrightButtonText={setrightButtonText}/>}></Route>
                <Route path='/Adicionar-Receitas' element={<AddRecipePage/>}></Route>
                <Route path='Detalhe/:id' element={<RecipeDetailsPage/>}></Route>
                <Route path='/' element={<RecipeListPage/>}></Route>
                <Route path='/Cadastro' element={<SignUpPage/>}></Route>
                <Route path='/*' element={<ErroPage/>}></Route>
                
        </Routes>
        
        </>
    )
}