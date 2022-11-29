'use strict';

var arrList = [];
var num = 0;
var addTodoList = function addTodoList(e) {
    e.preventDefault();
    var title = e.target.elements.tTitle.value;
    var addToList = {};
    addToList['title'] = title;
    addToList['id'] = ++num;
    arrList.push(addToList);
    render();
};
var deleteTodoList = function deleteTodoList(todoid) {
    var index = 0;
    var i = 0;
    for (i = 0; i < 5; i++) {
        if (arrList[i].id == todoid) {
            index = i;
            break;
        }
        console.log(i);
    }
    arrList.splice(index, 1);
    render();
};

var render = function render() {
    var temp = React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: 'title_box' },
            React.createElement(
                'h2',
                null,
                'todo App'
            ),
            React.createElement(
                'p',
                null,
                'Lets Manage your Task with us !!!!'
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
                    React.createElement('input', { type: 'text', name: 'tTitle', 'class': 'form-control' }),
                    React.createElement(
                        'button',
                        { 'class': 'btn btn-primary btn-sm-primary', type: 'submit' },
                        'Submit'
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
                        { 'class': 'input-group-text', id: 'basic-addon2', type: 'button', onClick: function onClick() {
                                addTodoInprogress(list.id);
                            } },
                        'InProgress'
                    ),
                    React.createElement(
                        'button',
                        { 'class': 'input-group-text', id: 'basic-addon2', type: 'button', onClick: function onClick() {
                                deleteTodoList(list.id);
                            } },
                        'Complete'
                    )
                );
            })
        )
    );

    var id_of_box = document.getElementById('container');
    ReactDOM.render(temp, id_of_box);
};
render();
