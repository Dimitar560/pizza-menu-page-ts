
import OrderButton from '../OrderButton/OrderButton'; 

import style from './Footer.module.css';

export default function Footer() {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    
    return(
        <footer className={style.foter}>
            {isOpen ? (
                <OrderButton closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    );

}