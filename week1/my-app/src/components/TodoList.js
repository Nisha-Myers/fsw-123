import ToDo from "./toDo";

const TodoList = (props) => {
    return (
    props.text.map((i) => {
        return ( 
        <ToDo key= {i.id} text= {i} completeToDo= {props.completeTodo} deleteToDo= {props.deleteTodo}/> 
        )
    }))
}


export default TodoList