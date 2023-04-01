import React from 'react';
import Styles from '../Styles/styles.module.scss';

export  const Spinner = ()=>{
    return (
        <div className={Styles.spinner}>
        <svg viewBox='0 0 50 50'>
  <circle cx="25" cy="25" r="20" fill="none"/>
</svg>
        </div>
    )
}