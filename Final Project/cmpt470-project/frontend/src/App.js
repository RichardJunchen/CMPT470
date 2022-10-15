import React from 'react';
import './App.css';
import './foundation.css';
import "simplebar/src/simplebar.css";

// import SearchIcon from "@material-ui/icons/Search";

import LeftDiv from './Components/LeftDiv/LeftDiv';
import RightLayout from './Components/RightLayout/RightLayout';
import { BrowserRouter } from 'react-router-dom';


function App () {
    return (
      <BrowserRouter>
        <div className="App" >
          <LeftDiv/>
          <RightLayout/>
        </div>
      </BrowserRouter>
    );
}

export default App;
