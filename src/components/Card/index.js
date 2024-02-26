import cardStyles from './Card.module.scss';

function Card(props) {
    console.log(props);
    return (
    <div className={cardStyles.card}>
        <div className={cardStyles.favorite}>
            <img src="/img/heart-unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={props.imageUrl} alt='Sneakers' />
        <h5>{props.title}</h5>
        <div className='d-flex justify-between align-center'>
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{props.price}</b>
            </div>
            <img className={cardStyles.plus} onClick={props.onClickPlus} src="/img/btn-plus.svg" alt="Plus"/>
        </div>
    </div>
    );
}

export default Card;