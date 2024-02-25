import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='card-image'>
          <img src='images/blog-1.jpg' alt='blog' className='img-fluid w-100'/>
      </div>
      <div className='blog-content'>
          <p className='date'>1 Dec, 2024</p>
          <h5 className='title'>A beautiful sunday morning renaissance</h5>
          <p className='desc'>Vertical marquees are currently experimental and may be buggy. Please swap the values of the marquee's height and width when setting them</p>
          <Link to="/" className='button'>Read More</Link>
      </div>
    </div>
  )
}

export default BlogCard
