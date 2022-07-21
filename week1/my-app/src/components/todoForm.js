import React, {useState} from 'react';

const TodoForm = (props) => {

    const [userInput, storeInput] = useState("")
    const changeInput = () => {storeInput(document.querySelector("#inputValue").value)} 

    return(
        <div id = "inputOptions">
            <input type = "text" placeholder = "What would you like to do?"  id = "inputValue" onChange = {() => changeInput()}></input>
            <button className='adding' onClick = {() =>{
                if(document.querySelector("#inputValue").value !== ""){
                    props.addTodo(userInput)
                } 

                else if(document.querySelector("#inputValue").value === ""){
                    const removeError = () =>{
                        document.querySelector("#errorReported").remove()
                    }
                    const errorReported = document.createElement("h2") 
                    errorReported.textContent = "Your input is empty, try adding something."
                    errorReported.style = "color: red"
                    errorReported.setAttribute("id", "errorReported")
                    document.querySelector("#inputOptions").appendChild(errorReported)
                    setTimeout(removeError, 4500)
                }
                
                }}>Add todo</button>
        </div>
    )
}

export default TodoForm