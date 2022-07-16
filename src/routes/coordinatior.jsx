

export const goToLogin=(navigate)=>{

    navigate('/Login');
};
export const goToRecipes=(navigate)=>{

    navigate('/Adicionar-Receitas');
};
export const goToRecipeDetail=(navigate, id)=>{

    navigate(`/Detalhe/${id}`);
};
export const goToSignUp=(navigate)=>{

    navigate('/Cadastro');
};
export const goToRecipeList=(navigate)=>{

    navigate('/');
};

