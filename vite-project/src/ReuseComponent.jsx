function ReuseComponent() {

    let number = Math.random() * 100;

    return (
        <h1 style={{ backgroundColor: '#776691' }}>Random Number: {Math.round(number)}</h1>
    );
}

export default ReuseComponent;