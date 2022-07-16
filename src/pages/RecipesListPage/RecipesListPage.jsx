import React from "react";
import { useProtedtedPage } from "../../hooks/useProtectedPage";
import { useUnProtedtedPage } from "../../hooks/useUnprotectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { AddRecipeButton, RecipeListContainer } from "./RecipeListStyled";
import { Add } from "@mui/icons-material";
import { goToRecipeDetail, goToRecipes } from "../../routes/coordinatior";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";




export const RecipeListPage = ()=>{
    useProtedtedPage()
    useUnProtedtedPage()
    const onClickCard=(id)=>{
        goToRecipeDetail(navigate, id)
    }

    const navigate= useNavigate()
    const recipes = useRequestData([],`${BASE_URL}/recipe/feed`)
    const recipesCards= recipes.map((recipe)=>{
        return(
            <RecipeCard key={recipe.recipe_id}
            title={recipe.title}
            image={recipe.image}
            onClick={()=>onClickCard(recipe.recipe_id)}
            />
        )
    })
    return(
        <>
        <RecipeListContainer>
        {recipesCards.length >0 ? recipesCards : <Loading/>}
        <AddRecipeButton
        color={'primary'}
        onClick={()=>goToRecipes(navigate)}
        >
            <Add/>
        </AddRecipeButton>
        </RecipeListContainer>
        </>
    )
}