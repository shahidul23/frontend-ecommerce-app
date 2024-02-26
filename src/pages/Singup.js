import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Singup = () => {
  return (
    <>
      <Meta title="Sing Up"/>
      <BreadCrumb title="Sing Up"/>
      <div className='singup-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Sing Up</h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <div>
                                <input type='text' name='firstName' placeholder='First Name' className='form-control'/>
                            </div>
                            <div>
                                <input type='text' name='lastName' placeholder='Last Name' className='form-control'/>
                            </div>
                            <div>
                                <input type='tel' name='mobile' placeholder='Mobile Number' className='form-control'/>
                            </div>
                            <div>
                                <input type='email' name='email' placeholder='Email' className='form-control'/>
                            </div>
                            <div className='mt-1'>
                                <input type='password' name='password' placeholder='Password' className='form-control'/>
                            </div>
                            <Link to="/login">Already have an account?</Link>
                            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button className='button border-0' type='submit'>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Singup