import React from 'react';

const BirthdayList = ({name, age, img}) => {
  return (
      <>
        <div className='container'>
               <img src={img} alt={img} className="images"/>
           <div className="details">
               <h3 className='name'>{name}</h3>
               <p className='age'>{age} years</p>
           </div>
        </div>
    </>
  )
}

export default BirthdayList;