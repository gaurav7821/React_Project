import Item from "./Item";

const FoodItem = ({ food }) => {
    return (
        <ul className="list-group">
            {food.map((item) => (
                <Item 
                key={item} 
                food={item}
                handleBuyButtonClicked ={ () => 
                    console.log(`${item} being bought`)
                }
                ></Item>
            ))}
        </ul>
    );
};

export default FoodItem;