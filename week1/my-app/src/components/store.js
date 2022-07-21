import {v4 as uuidv4} from 'uuid'; 


export const storeTodos = [
    {
        id: uuidv4(),
        text: 'goto gym',
        isComplete: false
    },
    {
        id: uuidv4(),
        text: 'do laundry',
        isComplete: false
    },
    {
        id: uuidv4(),
        text: 'food shopping',
        isComplete: false
    },
    {
        id: uuidv4(),
        text: 'do homework',
        isComplete: false
    }
]