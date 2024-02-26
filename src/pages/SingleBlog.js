import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { LuMoveLeft } from "react-icons/lu";
import BlogCard from '../components/BlogCard';
import blog from "../images/blog-1.jpg"

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name"/>
      <BreadCrumb title="Dynamic Blog Name"/>
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='single-blog-card'>
                        <Link to="/blogs" className='d-flex align-items-center gap-10'><LuMoveLeft className='fs-5'/>Go back to Blogs</Link>
                        <h3 className='title'>A Beautiful Sunday Morning Renaissance</h3>
                        <img src={blog} alt='blog' className='img-fluid w-100 my-4'/>
                        <p>You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.<br/><br/>
                        “The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book.”<br/><br/>
                        – Neil Borton
                        </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='other-blog-card'>
                        <h3 className='title'>Parturient convallis</h3>
                        <p>Aenean adipiscing sit scelerisque dictum ullamcorper fames ac inceptos est risus auctor ac senectus volutpat viverra ullamcorper a nec suscipit posuere sit dis. Enim elit duis.</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <BlogCard />
                </div>
                <div className='col-4'>
                    <BlogCard />
                </div>
                <div className='col-4'>
                    <BlogCard />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
