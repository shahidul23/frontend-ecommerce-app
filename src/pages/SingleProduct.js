import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProdictCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import Color from '../components/Color'
import ReactImageZoom from 'react-image-zoom';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
    const props = {width: 625, height: 400, zoomWidth: 600, img: "https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/05/Rolex-GMT-Master-II-Black-Blue-Batman-Bezel-Steel-Mens-Watch-126710-.jpg"};  
  const [orderProduct, setOrderProducts] = useState(true);  
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
      <Meta title="Product Name"/>
      <BreadCrumb title="Product Name"/>
      <div className='main-product-wrapper home-wrapper-2 py-3'>
        <div className='container-xxle'>
            <div className='row'>
                <div className='col-6'>
                    <div className='main-product-image'>
                        <div>
                           <ReactImageZoom className="img-fluid" {...props} />
                        </div>
                    </div>
                    <div className='other-product-image d-flex flex-wrap gap-15'>
                        <div>
                            <img src='https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/05/Rolex-GMT-Master-II-Black-Blue-Batman-Bezel-Steel-Mens-Watch-126710-.jpg' alt='watch' className='img-fluid'/>
                        </div>
                        <div><img src='https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/05/Rolex-GMT-Master-II-Black-Blue-Batman-Bezel-Steel-Mens-Watch-126710-.jpg' alt='watch' className='img-fluid'/></div>
                        <div><img src='https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/05/Rolex-GMT-Master-II-Black-Blue-Batman-Bezel-Steel-Mens-Watch-126710-.jpg' alt='watch' className='img-fluid'/></div>
                        <div><img src='https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/05/Rolex-GMT-Master-II-Black-Blue-Batman-Bezel-Steel-Mens-Watch-126710-.jpg' alt='watch' className='img-fluid'/></div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='main-product-details'>
                        <div className='border-bottom'>
                            <h3 className='title'>The Best Watches for Men | The Watch Club by SwissWatchExpo</h3>
                        </div>
                        <div className='border-bottom py-3'>
                            <p className='price'>$ 100.00</p>
                            <div className='d-flex align-items-center gap-10'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className='mb-0 p-review'>( 4 Reviews )</p>
                            </div>
                            <a className='review-btn' href='#reviews'>Write a Review</a>
                        </div>
                        <div className='py-3'>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h4 className='product-heading'>Type :</h4>
                                <p className='product-data'>Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h4 className='product-heading'>Brand :</h4>
                                <p className='product-data'>Rolex</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h4 className='product-heading'>Category :</h4>
                                <p className='product-data'>Man Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h4 className='product-heading'>Tags :</h4>
                                <p className='product-data'>luxury</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h4 className='product-heading'>Availablity :</h4>
                                <p className='product-data'>In Stock</p>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h4 className='product-heading'>Size :</h4>
                                <div className='d-flex flex-wrap gap-15'>
                                    <span className='border badge border-1 bg-white text-dark border-secondary'>S</span>
                                    <span className='border badge border-1 bg-white text-dark border-secondary'>M</span>
                                    <span className='border badge border-1 bg-white text-dark border-secondary'>L</span>
                                    <span className='border badge border-1 bg-white text-dark border-secondary'>XL</span>
                                    
                                </div>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h4 className='product-heading'>Color :</h4>
                                <Color />
                            </div>
                            <div className='d-flex gap-10 align-items-center flex-row mt-2 mb-3'>
                                <h4 className='product-heading'>Quantity :</h4>
                                <div className=''>
                                    <input type='number' name='' className='form-control' style={{"width":"100px"}}min={1}
                                    defaultValue={1}
                                    max={20}
                                    id=''/>
                                </div>
                                <div className='d-flex align-items-center gap-30 ms-5'>
                                    <button className='button border-0' type='submit'>Add To Cart</button>
                                    <Link to="/singup" className='button singup'>Buy It Now</Link>
                                </div>
                            </div>
                            <div className='d-flex gap-15 align-items-center'>
                                <div>
                                    <a href=''><TbGitCompare className='fs-5 me-2'/> Add to Compare</a>
                                </div>
                                <div>
                                    <a href=''><AiOutlineHeart className='fs-5 me-2'/> Add to Wishlist</a>
                                </div>
                            </div>
                            <div className='d-flex gap-10 flex-column my-3'>
                                <h4 className='product-heading'>Shipping And Retuens :</h4>
                                <p className='product-data'>Free shipping and returns available on all orders ! <br/> We ship all us domestic orders within <b>5-10 business days!</b></p>
                            </div><div className='d-flex gap-10 align-items-center my-3'>
                                <h4 className='product-heading'>Product Link :</h4>
                                <a href='javascript:void(0);' onClick={() =>{
                                    copyToClipboard("https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/05/Rolex-GMT-Master-II-Black-Blue-Batman-Bezel-Steel-Mens-Watch-126710-.jpg")
                                }}>Copy Product Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div> 
      <div className='description-wrapper home-wrapper-2 py-3'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                <h4>Description</h4>
                    <div className='bg-white p-3 description'>
                        <p>Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.<br/>
                        Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <section id='reviews' className='reviews-wrapper home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <h4>Reviews</h4>
                    <div className='review-inner-wrapper'>
                        <div className='reviews-head d-flex justify-content-between align-items-end'>
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0'>Based on 2 Reviews</p>
                                </div>
                            </div>
                            <div>
                                {orderProduct &&(
                                    <div>
                                        <Link className='text-dark text-decoration-underline'>Write a Reviews</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='review-form py-4'>
                            <h4 className='mb-2'>Write a Reviews</h4>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={true}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div>
                                    <textarea name='' id='' className='form-control w-100' cols="30" rows="4" placeholder='Comments'></textarea>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type='submit' className='button border-0'>Submit Review</button>
                                </div>
                            </form>
                        </div>
                        <div className='reviews mt-4'>
                            <div className='d-flex gap-10 align-items-center'>
                                <h6 className='mb-0'>Shohan Khan</h6>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <p className='mt-3'>
                            'setOrderProducts' is assigned a value but never used
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className='popular-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
        </div>
        <div className='row'>
          <ProdictCard />
          <ProdictCard />
          <ProdictCard />
          <ProdictCard />
        </div>
      </div>
    </section>
    </>
  )
}

export default SingleProduct
