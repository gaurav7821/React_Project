import styles from './Container.module.css'

const Item = (props) => {

    const handleBuyButtonClicked = (event) => {
        console.log(event);
        console.log(`${props.food} being bought`);
    }

    return (
        <li className="list-group-item kg-item">
            <span className="kg-span">{props.food}</span>
            <button className={`${styles.button} btn btn-info`}
                onClick={(event) => handleBuyButtonClicked(event)}
            >Buy</button>
        </li>
    );
};

export default Item; 