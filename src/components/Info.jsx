import React from 'react'
import AppContext from '../context';

import drawerStyles from './Drawer/Drawer.module.scss';

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className={drawerStyles.cartEmpty}>
        <img className='mb-20' width="120px" src={image} alt='Empty' />
        <h2>{title}</h2>
        <p className='opacity-6'>{description}</p>
        <button onClick={() => setCartOpened(false)} className={drawerStyles.greenButton}>
            <img src='img/arrow.svg' alt='Arrow' />Вернуться назад
        </button>
    </div>
  )
}

export default Info;

