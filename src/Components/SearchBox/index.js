import React from 'react';
import './style.css';

const SearchBox = ({ searchfield, searchChange, submitThis }) => {
    return(
        <div>
            <div className="group">      
                <input 
                    type="search"
                    onChange={searchChange}
                    className="styledInput"
                    required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="label-search">Buscar empresa por Nome</label>
            </div>
        </div>
    );
}

export default SearchBox;