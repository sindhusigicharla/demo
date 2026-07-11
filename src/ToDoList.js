import { useState } from "react";


function  ToDoList(){

    const [id, setId] = useState(5);



    const todos = [
        {
            id:1,
            description: "Get the groceries",
        },
        {
            id:2,
            description: "Read the book",
        },
        {
            id: 3,
            description: "Drink good amount of water",
        },
        {
            id: 4,
            description: "Drink good amount of water",
        }
    ]

    const [list, setList] = useState(todos)

    function deleteItem(id){

        // filter the list of elements where the listitem id not equal to id
        const filteredList = list.filter((listItem)=>listItem.id!=id)
        setList(filteredList);

    }

    function addItem(){

        const newObj = {
            id: id,
            description: `New item ${id}`
        }

        const updatedList = [...list, newObj];
        setId(id+1);
        setList(updatedList);
    }


    return (
        <div>
            <button onClick={()=>addItem()}>Add newItem</button>
            <ul>
                {list.map((listItem)=>{
                    return <li key={listItem.id}>
                        {listItem.description}  
                        <button onClick={()=>deleteItem(listItem.id)}>Delete</button>
                        </li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList;


// Update the list by adding new item
// delete the item and that should reflecting in the ui

// a1 = [1,2,3,4]
// e = 5
// a2 = [...a1, e] = [1,2,3,4,5]
