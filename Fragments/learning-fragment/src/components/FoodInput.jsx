import styles from './Container.module.css'

const FoodInput = ({handleKeyDown}) => {

    // const handleOnChange = (event) =>{
    //     console.log(event)
    // }

    return (
        <input
            className={styles.foodInput}
            type="text"
            placeholder='Enter food item here'
            onKeyDown={handleKeyDown}
        />
    )
};

export default FoodInput;