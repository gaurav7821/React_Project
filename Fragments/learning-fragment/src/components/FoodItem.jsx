import Item from "./Item";

const FoodItem = ({ food }) => {
    return (
        <ul className="list-group">
            {food.map((item) => (
                <Item key={item} food={item}></Item>
            ))}
        </ul>
    );
};

export default FoodItem;