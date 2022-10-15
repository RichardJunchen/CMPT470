// import React from 'react';
// import './Recipes.css';
// import axios from 'axios';
// import { useEffect, useState } from "react";
// import Comments from "./CommentSection/comments";
// import './comments.css'
// import { useParams } from "react-router-dom";



// function Recipes() {

//   const [listOfPosts, setListOfPosts] = useState([]);
//   const [listOfImages, setListOfImages] = useState([]);

//    useEffect(() => {
//     axios.get("http://localhost:3001/recipes").then((response) => {
//       setListOfPosts(response.data);
//     });

//     // listOfPosts.map((value,key) => {
//     //   console.log("we !!are " + value.id);
//     //   getRecipesImage(value.id,key);
//     // })
//     // getRecipesImage("31490");
//     // getRecipesImage("112140");
//     // getRecipesImage("59389");
//     // getRecipesImage("44061");

//   }, []);

//   // var params = useParams();
//   //  function getRecipesImage() {
//   //    axios.get(`http://localhost:3001/recipes/images/${id}`).then((res) => {
//   //     setListOfImages(res.data);
//   //   });
//   // }
//   // useEffect(() => {
//   //   getRecipesImage();
//   // }, [params.id]);

//   const getRecipesImage = (id) =>{
//     axios.get(`http://localhost:3001/recipes/images/${id}`).then((response) =>{
//       // console.log("heerere" + response.data);
//       // console.log(typeof(response.data));
//       var res = response.data.replaceAll("\"","");
//       console.log(res);
//       console.log(typeof(res));
//       setListOfImages(img=> [...img,res]);
//     })
//   }

//   return (
//     <>
//       {listOfPosts.map((value, key) => {
//         return (
//           <div class="medium-6 large-4 columns" id={key}>
//             <div className="each">
//               <div className="each_image">
//                 {/* <img alt="" class="product-item-img" src ={`http://localhost:3001/recipes/images/${value.id}`} lazy="loaded"></img> */}
//                 <img alt="" class="product-item-img" src = {listOfImages[key]} lazy="loaded"></img>

//               </div>
//               <div className="third">
//                 <a className="right_header_name" href={"/recipe/" + value.id} > {value.name}</a>
//                 <div className="right_description"> {value.description}</div>
//               </div>
//             </div>
//           </div>
//         )
//       })}

//       <div className="Comment_part">
//         <Comments
//           commentsUrl="http://localhost:3000/"
//           currentUserId="1"
//         />
//       </div>
//     </>
//   )
// }

// export default Recipes;




import React from 'react';
import './Recipes.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import Comments from "./CommentSection/comments";
import './comments.css'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';



function Recipes() {

  const [listOfPosts, setListOfPosts] = useState([]);
  const [listOfImages, setListOfImages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((response) => {
      setListOfPosts(response.data);
    });

    // listOfPosts.map((value,key) => {
    //   console.log("we !!are " + value.id);
    //   getRecipesImage(value.id,key);
    // })
    // getRecipesImage("31490");
    // getRecipesImage("112140");
    // getRecipesImage("59389");
    // getRecipesImage("44061");

  }, []);

  // var params = useParams();
  //  function getRecipesImage() {
  //    axios.get(`http://localhost:3001/recipes/images/${id}`).then((res) => {
  //     setListOfImages(res.data);
  //   });
  // }
  // useEffect(() => {
  //   getRecipesImage();
  // }, [params.id]);

  // const getRecipesImage = (id) =>{
  //   axios.get(`http://localhost:3001/recipes/images/${id}`).then((response) =>{
  //     // console.log("heerere" + response.data);
  //     // console.log(typeof(response.data));
  //     var res = response.data.replaceAll("\"","");
  //     var res = response.data;
  //     console.log(res);
  //     return res;
  //     // setListOfImages(img=> [...img,res]);
  //   })
  // }

  return (
    <>
      {listOfPosts.map((value, key) => {
        return (
          <div class="medium-6 large-4 columns" key={Math.random().toString(36).substr(2, 9)}>
            <div className="each">
              <div className="each_image">
                {/* <img alt="" class="product-item-img" src ={`http://localhost:3001/recipes/images/${value.id}`} lazy="loaded"></img> */}
                <img alt="" class="product-item-img" src={value.image_URL} lazy="loaded"></img>

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

      <div className="Comment_part">
        <Comments
          commentsUrl="http://localhost:3000/"
          currentUserId="1"
        />
      </div>
    </>
  )
}

export default Recipes;
