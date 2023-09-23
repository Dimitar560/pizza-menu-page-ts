import style from './OrderButton.module.css';

type orderProp = {
    openHour: number
    closeHour: number
}


export default function OrderButton({openHour,closeHour} : orderProp) {
    
    return (
        <div className={style.order}>
            <p>
                We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
                online.
            </p>
            <button className={style.btn}>Order</button>
        </div>
    );

}