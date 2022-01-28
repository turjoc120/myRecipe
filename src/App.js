
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './Components/HeaderNav/HeaderNav';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage';
import RecipeDetails from './Components/Pages/RecipeDetails/RecipeDetails';
import EditRecipe from './Components/Pages/EditRecipe/EditRecipe';
import AddRecipe from './Components/Pages/AddRecipe/AddRecipe';


function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/edit-recipe/:recipeId" element={<EditRecipe />} />
      </Routes>

    </div>
  );
}

export default App;
