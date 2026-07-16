import { useState } from "react";


function  ToDoList(){

    const [id, setId] = useState(5);
    const [task, setTask] = useState('');


    const [list, setList] = useState([])

    function deleteItem(id){

        // filter the list of elements where the listitem id not equal to id
        const filteredList = list.filter((listItem)=>listItem.id!=id)
        setList(filteredList);

    }

    function addItem(){

        const newTask = {
            id:id,
            description:task 
        }

        setId(id+1);
        const newArray = [...list, newTask];
        setList(newArray);
        setTask('');
    }

    


    return (
        <div>
            <input type="text" 
                placeholder="enter the task description"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
            />
            <button disabled={task===''} onClick={()=>addItem()}>Add newItem</button>


            {list.length!==0?(<ul>
                {list.map((listItem)=>{
                    return <li key={listItem.id}>
                        {listItem.description}
                        <button onClick={()=>deleteItem(listItem.id)}>Delete</button>
                        </li>
                })}
            </ul>): <h1>No more tasks</h1>}
            
        </div>
    )
}

export default ToDoList;


// Update the list by adding new item
// delete the item and that should reflecting in the ui

// a1 = [1,2,3,4]
// e = 5
// a2 = [...a1, e] = [1,2,3,4,5]
