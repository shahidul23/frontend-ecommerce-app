import React from 'react'
import { Link } from 'react-router-dom'
import { LuMoveLeft } from "react-icons/lu";
import watch from "../images/watch.jpg"

const Checkout = () => {
  return (
    <>
      <div className='checkout-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'>Google</h3>
                        <nav style={{"--bs-breadcrumb-divider":"'>'"}} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/" className='text-dark'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link to="/cart" className='text-dark'>Cart</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link className='text-dark'>Information</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link className='text-dark'>Payment</Link></li>
                            </ol>
                        </nav>
                        <h4 className='title total-price'>Contact Information</h4>
                        <p className='user-info total-price'>Shohan Khan (shohan98@gmail.com)</p>
                        <h4 className='mb-3'>Shipping Address</h4>
                        <form action='' className='d-flex gap-15 justify-content-between flex-wrap'>
                            <div className='w-100'>
                                <select className='form-control form-select' name='' id=''>
                                    <option value="" selected disabled>Select Country</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' name='' placeholder='First Name' className='form-control'/>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' name='' placeholder='Last Name' className='form-control'/>
                            </div>
                            <div className='w-100'>
                                <input type='text' name='' placeholder='Address' className='form-control'/>
                            </div>
                            <div className='w-100'>
                                <input type='text' name='' placeholder='Apartment,Suite, elc' className='form-control'/>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' name='' placeholder='City' className='form-control'/>
                            </div>
                            <div className='flex-grow-1'>
                                <select className='form-control form-select' name='' id=''>
                                    <option value="" selected disabled>Select State</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' name='' placeholder='Zip Code' className='form-control'/>
                            </div>
                            <div className='w-100'>
                                <div className='d-flex gap-15 justify-content-between align-items-center'>
                                    <Link to="/cart" className='text-dark'><LuMoveLeft className='me-2' /> Return to cart</Link>
                                    <Link to="/cart" className='button'>Continue to Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='border-bottom py-4'>
                        <div className='d-flex gap-10 mb-2 align-items-center'>
                            <div className='w-75 d-flex gap-10'>
                                <div className='w-25 position-relative'>
                                    <span style={{"top":"-10px", "right":"1px"}} className='badge bg-secondary text-white p-2 position-absolute'> 1 </span>
                                    <img src={watch} alt='watch' className='img-fluid'/>
                                </div>
                                <div>
                                    <h5 className='total-title'>development</h5>
                                    <p className='total-price'>kjkhasjdf</p>
                                </div>
                            </div>
                            
                            <div className='flex-grow-1'>
                                <h5 className='total'>$ 100.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                        <div className='d-flex gap-10 mb-2 align-items-center'>
                            <div className='w-75 d-flex gap-10'>
                                <div className='w-25 position-relative'>
                                    <span style={{"top":"-10px", "right":"1px"}} className='badge bg-secondary text-white p-2 position-absolute'> 1 </span>
                                    <img src={watch} alt='watch' className='img-fluid'/>
                                </div>
                                <div>
                                    <h5 className='total-title'>development</h5>
                                    <p className='total-price'>kjkhasjdf</p>
                                </div>
                            </div>
                            
                            <div className='flex-grow-1'>
                                <h5 className='total'>$ 100.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>SubTotal</p>
                            <p className='total-price'>$ 100.00</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Shipping</p>
                            <p className='mb-0 total-price'>$ 100.00</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center py-4'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'>$ 100.00</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
