import PizzaMenuList from '../PizzaMenuList/PizzaMenuList'; 

import pizzaDATA from '../data/data.json';

import style from './MenuSection.module.css';

export default function MenuSection() {
    
    return (
        <main className={style.menu}>

            <h2>Our menu</h2>

            {pizzaDATA.length > 0 ? 

                <>
                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All
                        from our stone oven, all organic, all delicious.
                    </p>
            
                    <PizzaMenuList pizzaData={pizzaDATA}/>
                </>
        
                :

                <p>We are still working on menu</p>
            
            }

        </main>
    );

}