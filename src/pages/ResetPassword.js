import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password"/>
      <BreadCrumb title="Reset Password"/>
      <div className='reset-password-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <div>
                                <input type='password' name='password' placeholder='Password' className='form-control'/>
                            </div>
                            <div className='mt-1'>
                                <input type='password' name='confpassword' placeholder='Confirm Password' className='form-control'/>
                            </div>
                            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button className='button border-0' type='submit'>Submit</button>
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

export default ResetPassword
