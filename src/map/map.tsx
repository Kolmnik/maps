import React from 'react';

export type defaultToDoListType = {
    id: number
    value: string
    isDone: boolean
}

export

type ToDoListType = {
    defaultToDoList: Array<defaultToDoListType>
    title?: string
    remove: Function
}


export const ToDoList = (props: ToDoListType) => {
    // let changeToDoList= props.defaultToDoList
    const displayToDoList = props.defaultToDoList.map((t) => {
        return (
            <li>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.value}</span>
                <button onClick={()=>{props.remove(t.id)}}>X</button>
            </li>
        )
    })

    return (
        <div>
            {displayToDoList}</div>
    )
}