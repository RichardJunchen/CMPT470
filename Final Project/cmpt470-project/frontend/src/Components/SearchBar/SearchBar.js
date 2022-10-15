import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";
import { Link } from "react-router-dom";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [open, setOpen] = useState(true);

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  async function handleFilter(event) {
    const searchWord = event.target.value;
    var data;
    setWordEntered(searchWord);
    setOpen(true);

    await axios.post("http://localhost:3001/recipes/search/recipes", { recipeName: searchWord }).then(res => {
      data = res.data;
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(data);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="search_input">
        <input
          type="text"
          placeholder="Search recipes"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && open && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <Link to={`/recipe/${value.id}`} onClick={handleClick}>
                  <p>{value.name}</p>
                </Link>
              );
            })}
            {/* <a className="dataItem">asofuhweoiuhgnpweiougnpsaijng</a> */}
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}

export default SearchBar;
