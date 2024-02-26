import React from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import drawerStyles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://0fa879b7c7c893b1.mokky.dev/orders', {
                items: cartItems,
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://0fa879b7c7c893b1.mokky.dev/cart/' + item.id);
                await delay(1000);
            }
        } catch (error) {
            alert('Ошибка при создании заказа :(');
        }
        setIsLoading(false);
    };

    return (
      <div className={`${drawerStyles.overlay} ${opened ? drawerStyles.overlayVisible : ''}`}>

        <div className={drawerStyles.drawer}>
            <h2 className="d-flex justify-between mb-30">
                Корзина
                <img onClick={onClose} className={drawerStyles.removeBtn} src="img/btn-remove.svg" alt="Remove" />
            </h2>

            {items.length > 0 ? (
            <div className='d-flex flex-column flex'>
                <div className={drawerStyles.items}>
                    {items.map((obj) => (
                        <div key={obj.id} className={drawerStyles.cartItem}>
                            <img className={drawerStyles.cartItemImg} src={obj.imageUrl} alt='Sneakers' />
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className={drawerStyles.removeBtn} src="img/btn-remove.svg" alt="Remove" />
                        </div>
                    ))}
                </div>
                <div className={drawerStyles.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>{totalPrice} руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>{(totalPrice / 100) * 5} руб. </b>
                        </li>
                    </ul>
                    <button disabled={isLoading} onClick={onClickOrder} className={drawerStyles.greenButton}>
                        Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
            ) : (
            <Info
               title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
               description={
                   isOrderComplete
                      ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                      : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                }
               image={isOrderComplete ? "img/complete-order.jpg" : "img/empty-cart.jpg"}
            />
            )}
        </div>
        
      </div>
    );
}

export default Drawer;