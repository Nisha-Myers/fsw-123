const ToDo = (props) => {

    return (
        <li id= {props.text.key} style= {{textDecoration: props.text.isComplete ? "line-through" : "" }}>
            <label>{props.text.text}</label>
            <input type="checkbox" onChange={() => props.completeToDo(props.text.id)}/>
            <button onClick= {() => props.deleteToDo(props.text.id)}>X</button>
        </li>
    )
}


export default ToDo