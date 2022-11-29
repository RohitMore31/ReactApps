const arrList = [];
let num = 0;
const addTodoList = (e) => {
    e.preventDefault();
    const title = e.target.elements.tTitle.value;
    const addToList = {}
    addToList['title'] = title;
    addToList['id'] = ++num;
    arrList.push(addToList);
    render();
}
const deleteTodoList = (todoid) => {
    let index = 0;
    let i = 0;
    for (i = 0; i < 5; i++) {
        if (arrList[i].id == todoid) {
            index = i;
            break;
        }
        console.log(i);
    }
    arrList.splice(index, 1);
    render();
}

const render = () => {
    const temp = (
        <div>
            <div className="title_box">
                <h2>todo App</h2>
                <p>Lets Manage your Task with us !!!!</p>
            </div>
            {/* text area */}
            <div className="add_task">
                <form onSubmit={addTodoList}>
                    <div class="input-group mb-3">
                        <input type="text" name="tTitle" class="form-control"></input>
                        <button class="btn btn-primary btn-sm-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            

            <div className="list_todo">
                {arrList.map((list) => {
                    return <div class="input-group mb-3">
                        <input type="text" class="form-control" value={list.title}>
                        </input>

                        <button class="input-group-text" id="basic-addon2" type="button" onClick={() => {
                            addTodoInprogress(list.id);
                        }}>
                            InProgress</button>

                        <button class="input-group-text" id="basic-addon2" type="button" onClick={() => {
                            deleteTodoList(list.id);
                        }}>
                            Complete</button>
                    </div>
                })}
            </div>
        </div>
    )

    const id_of_box = document.getElementById('container');
    ReactDOM.render(temp, id_of_box);
}
render();