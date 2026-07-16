function TodoItem2() {

    let todoName = "Buy Milk";
    let todoDate = "4/10/2026";

    return (
        <div class="container">
            {/* row second */}
            <div class="row kg-row">
                <div class="col-6">
                    {todoName}
                </div>
                <div class="col-4">
                    {todoDate}
                </div>
                <div class="col-2">
                    <button type="button" className="btn btn-danger kg-button">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem2;