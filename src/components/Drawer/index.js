import drawerStyles from './Drawer.module.scss';

function Drawer({ onClose, items = [] }) {
    return(
      <div className={drawerStyles.overlay}>

        <div className={drawerStyles.drawer}>
          <h2 className="d-flex justify-between mb-30">
            Корзина
            <img onClick={onClose} className={drawerStyles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
          </h2>

            <div className={drawerStyles.items}>
                {items.map((obj) => (
                    <div className={drawerStyles.cartItem}>
                        <img className={drawerStyles.cartItemImg} src={obj.imageUrl} alt='Sneakers' />
                        <div className="mr-20 flex">
                            <p className="mb-5">{obj.title}</p>
                            <b>{obj.price} руб.</b>
                        </div>
                        <img className={drawerStyles.removeBtn} src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                ))}
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