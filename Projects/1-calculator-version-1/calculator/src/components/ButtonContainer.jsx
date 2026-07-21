import styles from './ButtonContainer.module.css'

const ButtonContainer = () => {

    const buttonName = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8',
        '/', '=', '9', '0', '.'];

    return (
        <div className="styles.buttons-container">
            {buttonName.map(button => (
                <button key={button} className={styles.button}>
                    {button}
                </button>
            ))}

        </div>
    )
};

export default ButtonContainer;