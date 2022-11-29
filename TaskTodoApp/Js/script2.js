const arrList = [];
const inProgress = [];
let num = 0;

// Function For Adding Todo Ideas Into arrList
const addTodoList = (e) => {
    e.preventDefault();
    // Getting Value As Title From Form
    const title = e.target.elements.tTitle.value;
    // Empty Object
    const addToList = {}
    addToList['title'] = title;
    addToList['id'] = ++num;
    if(title!=""){
    arrList.push(addToList);
    }else{
        alert("Enter Idea First")
    }
    e.target.elements.tTitle.value="";
    render();
}

// Function For Deleting  Titel from arrList
const deleteTodoList = (todoid) => {
    let index = 0;
    let i = 0;
    for (i = 0; i <arrList.length; i++) {
        if (arrList[i].id == todoid) {
            index = i;
            break;
        }
    }
    // Deleting Element from ArrList
    arrList.splice(index, 1);
    render();
}

// Function For Adi=ding Title into inProgress
const addTodoInprogress = (TodoList) => {
    inProgress.push(TodoList);
    console.log(inProgress[0].title);
    render();
}

// Function For Deleting  Titel from inProgress
const deleteProgressList = (todoIdProgress) => {
    let index = 0;
    let i = 0;
    for (i = 0; i <inProgress.length; i++) {
        if (inProgress[i].id == todoIdProgress) {
            index = i;
            break;
        }
        console.log(i);
    }
    inProgress.splice(index, 1);
    render();
}

// Function For Rendering Temp
const render = () => {
    // Template
    const temp = (
        <div>
            {/* App Title */}
            <div className="title_box">
                <h2>Todo App</h2>
                <p>Lets Manage your Idea !!!!</p>

            </div>

            {/* Text Box Where Enter Ideas*/}
            <div className="add_task">
                <form onSubmit={addTodoList}>
                    <div class="input-group mb-3">
                        <input type="text" name="tTitle" placeholder="Put Your Idea Here " class="form-control"></input>
                        <button class="btn btn-primary btn-success" type="submit">Add Into ToDO</button>
                    </div>
                </form>
            </div>

            {/* Showing List of Todoes */}
            {arrList.length >0 &&
            <div className="list_todo">
                {arrList.map((list) => {
                    return <div class="input-group mb-3">
                        <input type="text" class="form-control" value={list.title}>
                        </input>
                        
                        <button class="input-group-text" id="basic-addon21" type="button" onClick={() => {
                            addTodoInprogress(list);
                            deleteTodoList(list.id);
                        }}>
                            Doing...</button>

                        <button class="input-group-text" id="basic-addon2" type="button" onClick={() => {
                            deleteTodoList(list.id);
                        }}>
                            Done</button>
                    </div>
                })}
            </div>
            }
            {/* Showing inProgressList */}
            <div className="inProgress">
                {inProgress.map((list1) => {
                    return <div class="input-group mb-3">
                        <input type="text" class="form-control" value={list1.title}>
                        </input>

                        <button class="input-group-text" id="basic-addon2" type="button" onClick={() => {
                            deleteProgressList(list1.id);
                        }}>
                            Done</button>
                    </div>
                })}
            </div>
        </div>
    )

    // Rendering Template with React
    const id_of_box = document.getElementById('container');
    ReactDOM.render(temp, id_of_box);
}
render();