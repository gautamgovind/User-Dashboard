import React from 'react';
import './Sort.scss';
import { SORT_LABELS, LABELS } from '../../constants';

const Sort = ({handleSort}) => {
  return (
    <div className='sort-section'>
          <label htmlFor='sort'>{LABELS.sortByLabel}</label>
          <select id='sort' onChange={(e)=>handleSort(e.target.value)}>
              {SORT_LABELS.map((option, index)=><option key={index} value={option.value}>{option.label}</option>)}
          </select>
    </div>
  )
}

export default Sort