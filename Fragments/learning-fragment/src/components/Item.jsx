import styles from './Container.module.css'

const Item = ({ food, bought, handleBuyButtonClicked }) => {

    return (
        <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
            <span className="kg-span">{food}</span>

            <button
                className={`${styles.button} btn btn-info`}
                onClick={handleBuyButtonClicked}
            >Buy</button>
        </li>
    );
};

export default Item; 