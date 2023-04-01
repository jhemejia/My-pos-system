import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../allProducts/productSlice';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'
import Styles from '../../Styles/styles.module.scss';
import { useCategories } from '../../hooks/useCategories';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filterOption = useSelector((state)=> state.allProducts.filterOption)
  const { categories } = useCategories();
  const dispatch = useDispatch();
 

  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    dispatch(filterProducts({ searchTerm: event.target.value, filterOption }));
  };

  const handleFilterOptionChange = (event) => {
    event.preventDefault();
    dispatch(filterProducts({ searchTerm, filterOption: event.target.value }));
    };

  return (
    <>
    <div className={Styles.searchBar}>
      <h2>Products</h2>
      <div className={Styles.searchInput}>
        <input type="search" placeholder="Search products" value={searchTerm} onChange={handleSearchInputChange} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={Styles.faSymbolsTop}  /> 
        <button id="clear-btn" onClick={()=>setSearchTerm('')}>Clear</button>
      </div>
      <div className={Styles.selectCategories}>
        <select value={filterOption} onChange={handleFilterOptionChange}>
          <option key={0} value="all">All products</option>
          {categories.map((category, index)=>{
            return (
              <option key={index} value={category}>{category.charAt(0).toUpperCase()+ category.slice(1)}</option>
              )
            })}
          
        </select>
        <FontAwesomeIcon icon={faFilter} className={Styles.faSymbolsTop} />
      </div>
    </div>
    
   </>
  );
};

export default SearchBar;
