//home

import React, { useState, useEffect } from 'react';
import logo from '../../icon.png';
import { MdOutlineQuestionMark } from "react-icons/md";
import { CiRollingSuitcase } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaThList } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";
import { BarLoader } from 'react-spinners';
import PostList from '../PostList';
import Header from '../Header';
import { FaBookmark } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { LuDoorClosed } from "react-icons/lu";
import { FaRocket } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaEarthAfrica } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";




import './index.css';

function Home() {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const apiUrl = searchTerm
          ? `https://api.stackexchange.com/2.3/search?pagesize=8&order=desc&sort=activity&intitle=${searchTerm}&site=stackoverflow`
          : 'https://api.stackexchange.com/2.3/questions?pagesize=6&order=desc&sort=activity&site=stackoverflow';

        const response = await fetch(apiUrl);
        const data = await response.json();
        setPosts(data.items);
        console.log('Posts fetched:', data.items);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [searchTerm]);

  const toggleLeftPanel = () => {
    setIsLeftPanelOpen(!isLeftPanelOpen);
  };

  const handleSearch = (searchContent) => {
    setSearchTerm(searchContent);
  };



  return (
    <>
    <Header toggleLeftPanel={toggleLeftPanel} onSearch={handleSearch} />
      <div className='home-content'>
      <div className='content-para'>
        
        
        {isLoading ? (
          <div className='spinner-container'>
            <BarLoader color='#36D7B7' loading={isLoading} />
          </div>
        ) : (<>          
         
          <div className='row right-cont'>
               
          <div className={`left-nav ${isLeftPanelOpen ? 'open' : ''}`}>
            <div className='column jstart ml3 '>
              <div className='row'>
                <img src={logo} alt='logo' className='logo' />
                <h2><span className='stack'>Stack</span>overflow</h2>
              </div>
  
              <div className='nav-list' >
                <p className='nav-list-para' > <MdOutlineQuestionMark className='icon-color' />  QUESTIONS</p>
                <p className='nav-list-para'><CiRollingSuitcase className='icon-color' /> JOBS</p>
                <p className='nav-list-para'><IoDocumentTextOutline className='icon-color' /> DOCUMENTATION <span className='new'>NEW</span></p>
                <p className='nav-list-para'><CiShoppingTag className='icon-color' /> TAG</p>
                <p className='nav-list-para'> <CiUser className='icon-color' /> USER</p>
                <p className='nav-list-para'><CiBookmark className='icon-color' />BANDGES</p>
                <p className='nav-list-para'><HiOutlineSpeakerphone className='icon-color' />  ASK QUESTION</p>
                <p className='nav-list-para'><FaThList className='icon-color' />  STACK EXCHANGE</p>
                <p className='nav-list-para'> <FaInbox className='icon-color' />  INBOX <span className='new-inbox'>24</span></p>
              </div>
            </div>
          </div>
          <PostList className='right-cont' posts={posts} />
          </div>
          
          </>

        )}
      </div>
      
      <div className='column right-background right-cont'>
      <div>
      <h3>Looking out for...</h3>
      <div>
      <p className='right-cont-title'>Front end Developer with Angular</p>
      <p>WalletHub</p>
      <p><CiLocationOn />Washington, DC    <FaEarthAfrica />remote</p></div>
      <hr /> <div>
      <p className='right-cont-title'>Senior iOS / iPhone Engineer</p>
      <p>Perk.com INC</p>
      <p><CiLocationOn />Bengaluru, India <HiOutlineOfficeBuilding />In Office</p></div>
      <hr /> <div>
      <p className='right-cont-title'>Software Engineer</p>
      <p>SparkNET Technologies</p>
      <p><CiLocationOn />No Location  <FaEarthAfrica />Remote</p>
      <p className='right-cont-title'>VIEW ALL JOBS ></p></div>
      </div>


      <div>
      <h3>Network questions</h3>
      <div>
      <p className='right-cont-title'><FaCommentAlt style={{color: "purple"}}/>
        Were the women who against giving women the right to vote?</p>
      </div>
      <hr /> 
      <div>
      <p className='right-cont-title'><FaStackOverflow style={{color: "orange"}} />

      Why does everybody typedef over standard C types?</p>
      </div>
      <hr /> 
      <div>
      <p className='right-cont-title'> <FaBookmark style={{color: "red"}}/>

      An English word describing a pseudo-job</p>
      </div>
      <hr /> 
      <div>
      <p className='right-cont-title'><FaRocket style={{color: "green"}}/>

      When flying on a tight schedule, are you obligated to run to make it to the next gate on a connection?</p>
      </div>
      <hr /> 
      <div>
      <p className='right-cont-title'><LuDoorClosed style={{color: "blue"}}/>
         Does 1 pixel have a standard size?</p>
      </div>
      <hr /> 
      
      </div>
      </div>
    </div>     
    </>
  );
}

export default Home;
