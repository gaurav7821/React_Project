import styles from './Container.module.css'

const Item = ({food, handleBuyButtonClicked}) => { 

    return (
        <li className="list-group-item kg-item">
            <span className="kg-span">{food}</span>

            <button 
                className={`${styles.button} btn btn-info`}
                onClick={handleBuyButtonClicked}
            >Buy</button>
        </li>
    );
};

export default Item; 