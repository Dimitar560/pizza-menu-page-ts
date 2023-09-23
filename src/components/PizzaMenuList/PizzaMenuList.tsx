import style from './PizzaMenuList.module.css';

interface pizzaDataProp {
    pizzaData: pizzaObj[]
}

interface pizzaObj {
    name: string
    ingredients: string
    price: number
    photoName: string
    soldOut: boolean
}

export default function PizzaMenuList({pizzaData} : pizzaDataProp) {

    return( 
        <>
            <ul className={style.pizzas}>

                {pizzaData.map((x,i)=>
            
                {
                    return(

                        <li key={i} className={`${style.pizza} ${x.soldOut ? style.soldOut : ''}`}>
                        
                            <img src={x.photoName} alt={x.name} />

                            <div>
                                <h3>{x.name}</h3>

                                <p>{x.ingredients}</p>

                                <span>{x.soldOut ? 'SOLD OUT' : x.price}</span>
                            </div>
                        </li>
                    );
                })}

            </ul>
        </>
    );

}