import { React } from 'react';
import RecipePage from '../RecipePage/RecipePage';
import { Route, Routes } from 'react-router-dom';
import DefaultRecipes from '../Recipes/Recipes';
import RightFrame from '../RightFrame/RightFrame';
import SelectedRecipes from '../Recipes/SelectedRecipes';
import SelectedRecipes_post from '../Recipes/SeletedRecipes_post';


function RightLayout() {
    return (
        <Routes>
            <Route element={<RightFrame />}>
                <Route path="/recipe/:id" element={<RecipePage />} />
                <Route path="/" element={<DefaultRecipes />} />
                <Route path="/recipes/search/rfi/:ings" element={<SelectedRecipes/>} />
                <Route path="/recipes/search/rfi2/:inglist" element={<SelectedRecipes_post/>} />
            </Route>
        </Routes>
    );
}

export default RightLayout;