import styles from './Container.module.css'

const FoodInput = () => {

    const handleOnChange = (event) =>{
        console.log(event)
    }

    return (
        <input
            className={styles.foodInput}
            type="text"
            placeholder='Enter food item here'
            onChange={handleOnChange}
        />
    )
};

export default FoodInput;