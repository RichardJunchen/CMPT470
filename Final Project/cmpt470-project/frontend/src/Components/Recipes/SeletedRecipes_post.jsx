import React from 'react';
import './Recipes.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


function SelectedRecipes_post() {

  var params = useParams();
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3001/recipes/search/rfi", { inglist: params.inglist }).then(res => {
      setListOfPosts(res.data);
      // console.log(params.inglist);
    });
  }, []);

  return (
    <>
      {listOfPosts.map((value, key) => {
        return (
          <div class="medium-6 large-4 columns" id={key}>
            <div className="each">
              <div className="each_image">
              <img alt="" class="product-item-img" src = {value.image_URL} lazy="loaded"></img>
              </div>
              <div className="third">
                <Link to={`../recipe/${value.id}`}>
                  {value.name}
                </Link>
                <div className="right_description"> {value.description}</div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SelectedRecipes_post;