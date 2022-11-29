"use strict";

var arrList = [];
var callFn = function callFn(e) {
    e.preventDefault();
    var title = e.target.elements.nTitle.value;
    arrList['title'] = title;
};

var temp = React.createElement(
    "div",
    null,
    React.createElement(
        "div",
        { className: "title_box" },
        React.createElement(
            "h2",
            null,
            "todo App"
        ),
        React.createElement(
            "p",
            null,
            "Lets Manage your Task with us !!!!"
        )
    ),
    React.createElement(
        "div",
        { className: "add_task" },
        React.createElement(
            "form",
            { onSubmit: callFn },
            React.createElement(
                "div",
                { "class": "input-group mb-3" },
                React.createElement("input", { type: "text", "class": "form-control", name: "tTitle" }),
                React.createElement(
                    "button",
                    { "class": "btn btn-primary btn-sm-primary", type: "submit" },
                    "Submit"
                )
            )
        )
    ),
    React.createElement(
        "div",
        { className: "list_todo" },
        arrList.map(function (items) {
            return React.createElement(
                "div",
                null,
                items
            );
        })
    )
);

var id_of_box = document.getElementById('container');
ReactDOM.render(temp, id_of_box);
