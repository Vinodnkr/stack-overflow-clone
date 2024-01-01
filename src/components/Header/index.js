//header
import React,{useEffect, useState} from 'react'

import { FaSearch } from 'react-icons/fa';
import { IoIosHelpBuoy } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { LuAirplay } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";


function Header({ toggleLeftPanel, onSearch }) {
  const [searchContent, setSearchContent] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchContent(e.target.value);
   
  };

  useEffect(() => {
    onSearch(searchContent);
  },[searchContent]) 



    return (
      <div className='row'>
        <div className='logo-container row'>
          <div className='row logo-container-logo jcenter'>
            <CiMenuBurger className='menu-icon' onClick={toggleLeftPanel} /> {/* Use the toggleLeftPanel function */}
          </div>

          <div className='row search-container'>
          <FaSearch  className='search-icon' />
          <input
            type='text'
            placeholder='Search'
            className='center search-bar'
            value={searchContent}
            onChange={handleSearchInputChange}
          />
          
        </div>

          <div className='jend row colorg'>
            <div className='row acenter'>
              <IoIosHelpBuoy className='help-icon center' />
              <p className='ml2'> Help</p>
            </div>
            <div className='row acenter ml3'>
              <LuAirplay />
              <p className='ml2'>  Tour</p>
            </div>
            <div className='row acenter ml3'>
              <RxAvatar />
              <FaAngleDown />
            </div>
          </div>
        </div>
      </div>

  )
}

export default Header