import React from 'react';
import { Link } from "react-router-dom";

import { useCart } from '../../hooks/useCart';

import headerStyles from './Header.module.scss';

function Header(props) {
  const { totalPrice } = useCart();

    return(
      <header className="d-flex justify-between align-center p-40">
        <Link to="/react-sneakers/">
          <div className="d-flex align-center">
              <img className={headerStyles.headerLogo} src="img/logo.svg" alt="Logotype"/>
            <div>
              
            </div>
          </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img className={headerStyles.headerCart} src="img/cart.svg" alt="Корзина" />
            <span>{totalPrice} руб.</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="/react-sneakers/favorites">
              <img className={headerStyles.headerHeart} src="img/heart.svg" alt="Закладки" />
            </Link>
          </li>
          <li>
            <Link to="/react-sneakers/orders">
              <img className={headerStyles.headerUser} src="img/user.svg" alt="Пользователь" />
            </Link>
          </li>
        </ul>
      </header>
    );
}

export default Header;