import React from 'react'

const Container = (props) => {

  return (
    <section id={props.id1} className={props.class1}>
       <div className='container-xxl'>
         {props.children}
       </div>
    </section>
  )
}

export default Container
