import "./RecipePage.css";
import { useEffect, useState, React } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function RecipePage() {
  var params = useParams();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getRecipe() {
    setLoading(true);
    await axios.get(`http://localhost:3001/recipes/${params.id}`).then((res) => {
      setRecipe(res.data);
    });

    setLoading(false);
  }

  useEffect(() => {
    getRecipe();
  }, [params.id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="Right_background">
          <div className="EachTitle"><Link className="back_button" to="/"> ---Back to home --- </Link> {recipe[0].name}</div>
          <div className="page_left">
            <div className="Each_description"><h4>Introduce the recipes</h4>{recipe[0].description}</div>
            <h5 className="title_Of_Ingredient">List of Ingredients ({recipe[0].n_ingredients} ingredients):</h5>
            <div>{recipe[0].ingredients.split(/[\[\]',]/).map(o =>
            (<div className="List_Of_Ingredient">
              <p>{o}</p>
            </div>))}
            </div>
          </div>
          <div className='page_right'>
            <div className="recipe_Photo">
              <img alt="" class="repices_img" src={recipe[0].image_URL} lazy="loaded"></img>
            </div>
            <br></br>
            <div className="List_Of_details"> It contains <strong>{recipe[0].calories}</strong> calories</div>
            <div className="List_Of_details"> It contains <strong>{recipe[0].total_fat}</strong> total fat</div>
            <div className="List_Of_details"> It contains <strong>{recipe[0].sugar}</strong> sugar</div>
            <div className="List_Of_details"> It contains <strong>{recipe[0].sodium}</strong> sodium</div>
            <div className="List_Of_details"> It contains <strong>{recipe[0].protein} </strong>protein</div>
            <div className="List_Of_details"> It contains <strong>{recipe[0].saturated_fat}</strong> saturated fat</div>
            <div className="List_Of_details"> It contains <strong>{recipe[0].carbohydrates}</strong> carbohydrates</div>



            <h5 className="title_Of_Step">Specific steps :</h5>
            <div>{recipe[0].steps.split(/[\[\]]/).map(o =>
            (<div className="List_Of_Step">
              <p>{o}</p>
            </div>))}
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}

export default RecipePage;
