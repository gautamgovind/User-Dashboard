import React from 'react';

const Card = ({userData}) => {
    const { firstName, lastName, vaccineType, nhsNumber } = userData;
  return (
    <tr className='user-data'>
        <td>{`${firstName} ${lastName}`}</td>
        <td>{nhsNumber}</td>
        <td>{vaccineType}</td>
    </tr>
  )
}

export default Card