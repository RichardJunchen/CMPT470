import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";
import { Link } from "react-router-dom";
import PubSub from 'pubsub-js'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import "./LeftSearchBar.css";

function LeftSearchBar() {
    const [filteredIngData, setFilteredIngData] = useState([]);
    const [ingWordEntered, setIngWordEntered] = useState("");
    const [open, setOpen] = useState(true);
  
    const handleClickAway = () => {
      setOpen(false);
    };
  
    // const handleClick = () => {
    //   setOpen((prev) => !prev);
    // };
  
    async function handleFilter(event) {
      const searchWord = event.target.value;
      var data = [];
      setIngWordEntered(searchWord);
      setOpen(true);

      await axios.post("http://localhost:3001/recipes/search/ingredients", { ing: searchWord }).then(res => {
          //data = res.data;
          res.data.map((ob,key)=>{
            data.push(ob.ingredients);
          });
      });
  
      if (searchWord === "") {
        setFilteredIngData([]);
      } else {
        setFilteredIngData(data);
      }
    };
  
    const addInput = () => {
      // setFilteredIngData([]);
      // setIngWordEntered("");
      PubSub.publish('ADD ING',ingWordEntered);
    };

    const addIng = event =>{
      setOpen((prev) => !prev);
      PubSub.publish('ADD ING',event.target.innerText);
    }
  
    return (
      <div className="search">
        <div className="search_input">
          <input
            type="text"
            placeholder="Search Ingredients"
            value={ingWordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {ingWordEntered.length === 0 ? (
              <SearchIcon/>
            ) : (
              <button className="addBtn" onClick={addInput} >
                ADD
              </button>
            )}
          </div>
        </div>
        {filteredIngData.length !== 0 && open && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="left_dataResult">
              {filteredIngData.slice(0, 15).map((value, key) => {
                return (
                  // <Link to={`/recipe/${value.id}`} onClick={handleClick}>
                  //   <p>{value.name}</p>
                  // </Link>
                  <a className="dataItem" onClick={addIng}>
                    {value}
                  </a>
                );
              })}
            </div>
          </ClickAwayListener>
        )}
          
      </div>
    );
}

export default LeftSearchBar;