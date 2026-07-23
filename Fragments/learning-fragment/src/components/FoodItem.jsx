import Item from "./Item";
import { useState } from "react";

const FoodItem = ({ food }) => {

    let [activeItems, setActiveItems] = useState([]);

    let onBuyButton = (item, event) =>{
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }

    return (
        <ul className="list-group">
            {food.map((item) => (
                <Item 
                key={item} 
                food={item}
                bought={activeItems.includes(item)}
                handleBuyButtonClicked ={ (event) => 
                    onBuyButton(item, event)
                }
                ></Item>
            ))}
        </ul>
    );
};

export default FoodItem;