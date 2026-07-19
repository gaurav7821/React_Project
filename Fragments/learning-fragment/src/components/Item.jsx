const Item = (props) => {
    return (
        <li className="list-group-item kg-item">
           <span className="kg-span">{props.food}</span>
        </li>
    );
};

export default Item; 