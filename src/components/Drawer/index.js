import drawerStyles from './Drawer.module.scss';

function Drawer() {
    return (
    <div style={{display: 'none'}} className={drawerStyles.overlay}>
        <div className={drawerStyles.drawer}>
            <h2 className="d-flex justify-between mb-30">
                Корзина
                <img className={drawerStyles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
            </h2>
            <div className={drawerStyles.items}>
                <div className={drawerStyles.cartItem}>
                    <div
                        style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}}
                        className={drawerStyles.cartItemImg}>
                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={drawerStyles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
                </div>

                <div className={drawerStyles.cartItem}>
                    <div
                        style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}
                        className={drawerStyles.cartItemImg}>
                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={drawerStyles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
                </div>

                <div className={drawerStyles.cartItem}>
                    <div
                        style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}}
                        className={drawerStyles.cartItemImg}>
                    </div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={drawerStyles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
                </div>
            </div>
  
            <div className={drawerStyles.cartTotalBlock}>
                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб. </b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб. </b>
                    </li>
                </ul>
                <button className={drawerStyles.greenButton}>
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                </button>
            </div>
        </div>
    </div>
    );
}

export default Drawer;