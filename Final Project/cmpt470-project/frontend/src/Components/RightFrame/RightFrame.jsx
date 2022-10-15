import React from 'react';
import './RightFrame.css';
import SearchBar from '../SearchBar/SearchBar';
import { Outlet, Link } from 'react-router-dom';

function RightFrame() {
    return (
        <div className="right">
            <Link to="/"><h1 className="App-title">Kitchen</h1></Link>
            <div className="search_bar">
                <SearchBar />
            </div>
            <Outlet />
        </div>
    );
}

export default RightFrame;