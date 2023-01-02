import React from 'react'
import './article.css';

const Article = ({imgurl, date, title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgurl} alt='blog image'/>
      </div>
        <div className='gpt3__blog-container_article-content'>
          <p>{date}</p>
          <h3>{title}</h3>
          <p>Read the full article</p>
        </div>
    </div>
  )
}

export default Article