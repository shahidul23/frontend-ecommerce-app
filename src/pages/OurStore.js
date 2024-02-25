import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import ProdictCard from '../components/ProductCard';
import Color from '../components/Color';

const OurStore = () => {
 const [grid, setGrid] = useState(3); 
  return (
    <>
      <Meta title="Our Store"/>
      <BreadCrumb title="Our Store"/>
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li><Link to="#">Watch</Link></li>
                    <li><Link to="#">Tv</Link></li>
                    <li><Link to="#">Camera</Link></li>
                    <li><Link to="#">Laptop</Link></li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filter By</h3>
              <div>
                <h5 className='sub-title'>Availablity</h5>
                <div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id=''/>
                    <label className='form-check-label' htmlFor="">In Stock (12)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id=''/>
                    <label className='form-check-label' htmlFor="">Out of Stock (2)</label>
                  </div>
                </div>
                <h5 className='sub-title'>Price</h5>
                <div className='d-flex align-items-center gap-10'>
                  <div className="form-floating">
                    <input type="email" className="form-control py-1" id="floatingInput" placeholder="From"/>
                    <label htmlFor="From">From</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control py-1" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="to">To</label>
                  </div>
                </div>
                <h5 className='sub-title'>Colors</h5>
                <div className='d-flex flex-wrap gap-10'>
                  <Color /><Color /><Color /><Color />
                </div>
                <h5 className='sub-title'>Size</h5>
                <div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id=''/>
                    <label className='form-check-label' htmlFor="">S (12)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id=''/>
                    <label className='form-check-label' htmlFor="">M (20)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id=''/>
                    <label className='form-check-label' htmlFor="">L (1)</label>
                  </div>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value="" id=''/>
                    <label className='form-check-label' htmlFor="">XL (2)</label>
                  </div>
                </div>
              </div>
              </div>
              <div className='filter-card mb-3'>
              <h3 className='filter-title'>Products Tags</h3>
              <div className=''>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Smart Phone</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Tv</span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Watch</span>
                </div>
              </div>
              </div>
              <div className='filter-card mb-3'>
              <h3 className='filter-title'>Random Products</h3>
              <div>
                <div className='random-products mb-2 d-flex'>
                  <div className='w-35'>
                    <img src='images/watch.jpg' alt='watch' className='img-fluid'/>
                  </div>
                  <div className='w-65'>
                    <h5>Kids headphone bulk 10 pack multi colors for students</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p>$ 300</p>
                  </div>
                </div>
                <div className='random-products mb-2 d-flex'>
                  <div className='w-35'>
                    <img src='images/watch.jpg' alt='watch' className='img-fluid'/>
                  </div>
                  <div className='w-65'>
                    <h5>Kids headphone bulk 10 pack multi colors for students</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p>$ 300</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{"width":"120px"}}>Sort By:</p>
                    <select name='' className='form-control form-select' id=''>
                      <option value="">Laptop</option>
                      <option value="">Phone</option>
                      <option value="">Tv</option>
                      <option value="">Watch</option>
                      <option value="">Books</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalProducts mb-0'>12 Products</p>
                    <div className='d-flex gap-10 align-items-center grid'>
                      <img src='images/gr4.svg' className='d-block img-fluid' alt='grid' onClick={()=>{setGrid(3)}}/>
                      <img src='images/gr3.svg' className='d-block img-fluid' alt='grid' onClick={()=>{setGrid(4)}}/>
                      <img src='images/gr2.svg' className='d-block img-fluid' alt='grid' onClick={()=>{setGrid(6)}}/>
                      <img src='images/gr.svg' className='d-block img-fluid' alt='grid' onClick={()=>{setGrid(12)}}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                <ProdictCard grid = {grid}/>
                <ProdictCard grid = {grid}/>
                <ProdictCard grid = {grid}/>
                <ProdictCard grid = {grid}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore
