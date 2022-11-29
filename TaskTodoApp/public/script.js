'use strict';

var arrList = [];
var inProgress = [];
var num = 0;

// Function For Adding Todo Ideas Into arrList
var addTodoList = function addTodoList(e) {
    e.preventDefault();
    // Getting Value As Title From Form
    var title = e.target.elements.tTitle.value;
    // Empty Object
    var addToList = {};
    addToList['title'] = title;
    addToList['id'] = ++num;
    if (title != "") {
        arrList.push(addToList);
    } else {
        alert("Enter Idea First");
    }
    e.target.elements.tTitle.value = "";
    render();
};

// Function For Deleting  Titel from arrList
var deleteTodoList = function deleteTodoList(todoid) {
    var index = 0;
    var i = 0;
    for (i = 0; i < arrList.length; i++) {
        if (arrList[i].id == todoid) {
            index = i;
            break;
        }
    }
    // Deleting Element from ArrList
    arrList.splice(index, 1);
    render();
};

// Function For Adi=ding Title into inProgress
var addTodoInprogress = function addTodoInprogress(TodoList) {
    inProgress.push(TodoList);
    console.log(inProgress[0].title);
    render();
};

// Function For Deleting  Titel from inProgress
var deleteProgressList = function deleteProgressList(todoIdProgress) {
    var index = 0;
    var i = 0;
    for (i = 0; i < inProgress.length; i++) {
        if (inProgress[i].id == todoIdProgress) {
            index = i;
            break;
        }
        console.log(i);
    }
    inProgress.splice(index, 1);
    render();
};

// Function For Rendering Temp
var render = function render() {
    // Template
    var temp = React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: 'title_box' },
            React.createElement(
                'h2',
                null,
                'Todo App'
            ),
            React.createElement(
                'p',
                null,
                'Lets Manage your Idea !!!!'
            )
        ),
        React.createElement(
            'div',
            { className: 'add_task' },
            React.createElement(
                'form',
                { onSubmit: addTodoList },
                React.createElement(
                    'div',
                    { 'class': 'input-group mb-3' },
                    React.createElement('input', { type: 'text', name: 'tTitle', placeholder: 'Put Your Idea Here ', 'class': 'form-control' }),
                    React.createElement(
                        'button',
                        { 'class': 'btn btn-primary btn-success', type: 'submit' },
                        'Add Into ToDO'
                    )
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'list_todo' },
            arrList.map(function (list) {
                return React.createElement(
                    'div',
                    { 'class': 'input-group mb-3' },
                    React.createElement('input', { type: 'text', 'class': 'form-control', value: list.title }),
                    React.createElement(
                        'button',
                        { 'class': 'input-group-text', id: 'basic-addon21', type: 'button', onClick: function onClick() {
                                addTodoInprogress(list);
                                deleteTodoList(list.id);
                            } },
                        'Doing...'
                    ),
                    React.createElement(
                        'button',
                        { 'class': 'input-group-text', id: 'basic-addon2', type: 'button', onClick: function onClick() {
                                deleteTodoList(list.id);
                            } },
                        'Done'
                    )
                );
            })
        ),
        React.createElement(
            'div',
            { className: 'inProgress' },
            inProgress.map(function (list1) {
                return React.createElement(
                    'div',
                    { 'class': 'input-group mb-3' },
                    React.createElement('input', { type: 'text', 'class': 'form-control', value: list1.title }),
                    React.createElement(
                        'button',
                        { 'class': 'input-group-text', id: 'basic-addon2', type: 'button', onClick: function onClick() {
                                deleteProgressList(list1.id);
                            } },
                        'Done'
                    )
                );
            })
        )
    );

    // Rendering Template with React
    var id_of_box = document.getElementById('container');
    ReactDOM.render(temp, id_of_box);
};
render();
