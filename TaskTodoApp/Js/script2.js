const arrList =[];
const callFn = (e)=>{
    e.preventDefault();
    const title = e.target.elements.nTitle.value;
   arrList['title']=title;
}

const temp =(
<div>
    <div className="title_box">
    <h2>todo App</h2>
    <p>Lets Manage your Task with us !!!!</p>
    </div>
    {/* text area */}
    <div className="add_task">
        <form onSubmit ={callFn}>
            <div class="input-group mb-3">
            <input type="text" class="form-control" name ="tTitle"></input>
            <button class="btn btn-primary btn-sm-primary" type="submit">Submit</button>
            </div>
        </form>    
    </div>
    {/* list og todo */}
    <div className="list_todo">
            {arrList.map((items)=>{
                return <div>{items}</div>
            })}
    </div>

</div>
)


const id_of_box = document.getElementById('container');
ReactDOM.render(temp,id_of_box);