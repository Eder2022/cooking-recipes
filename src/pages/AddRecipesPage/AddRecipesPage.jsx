import { useProtedtedPage } from "../../hooks/useProtectedPage"

import React from 'react'

import { RecipeContainer, ScreenContainer } from './AddStyled'
import { AddRecipeForm } from "./AddRecipesForm"
import Typography from '@mui/material/Typography'

export const AddRecipePage = () => {
    useProtedtedPage()
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
        <AddRecipeForm/>
      </RecipeContainer>
    </ScreenContainer>
  )
}


