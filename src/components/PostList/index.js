import React from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import logo from '../../icon.png';
import './index.css';

const PostList = ({ posts }) => {
  return (
    <div className=''>
    
    <ul>
    <div className='row ml3 question-tag'>
    <p className='question-tag-non-orange'>interesting</p>
    <p className='question-tag-title'>featured</p>
    <p className='question-tag-title'>hot</p>
    <p className='question-tag-title' >week</p>
    <p className='question-tag-title'>month</p>
    </div>
    <hr />
      {posts.map(post => (
        <div className="post-container center-container" key={post.question_id}>
        <div>
        <a href={post.link} className="post-link">
        <h3 className="post-title">{post.title}</h3>
      </a>
      <ul className='row'>
            {post.tags.map((tag, index) => (
              <li key={index} className="post-tags">{tag}</li>
            ))}
          </ul>

          
      <p className="post-info">{post.owner.display_name}  {post.owner.reputation}</p>
    
        </div>
        <div className='row font-view-ans-score '>
        <p className="post-view-count ml2">{post.score} votes <AiOutlineLike />   
        </p>
        <br />
        <p className="post-answer-count ">{post.answer_count} answers <FaRegCommentAlt />
        </p>  <br />
        <p className="post-score ">{post.view_count} views  <FaRegEye />
        </p>
        </div>
         
        </div>
      ))}
    </ul>
    <img src={logo} alt='logo' className='logo-big' />          
    <h2>Looking for more?</h2>
    <p>Browse the <span style={{color: "#03b1fc"}}>complete list of questions
    </span>, or <span  style={{color: "#03b1fc"}} >popular tags</span>. Helps us answer <br />unanswered questions</p>
    <hr />
    </div>
  );
};

export default PostList;
