import React, {useState} from 'react';
import './App.css';
import {defaultToDoListType, ToDoList} from "./map/map";
import {FilterButtons} from "./map/buttonsFilter";


const App = () => {
    let defaultToDoList: Array<defaultToDoListType> = [
        {id:1, value: 'Масло', isDone: false},
        {id:2, value: 'Хлеб', isDone: true},
        {id:3, value: 'Молоко', isDone: false},
        {id:4, value: 'Курица', isDone: true},
        {id:5, value: 'Чай', isDone: false},
    ]

    let [updatedToDoList, setUpdatedToDoList] = useState(defaultToDoList)
    let [filterToDoList,setFilterToDoList] = useState('all')

    function changeFilter (value: string) {
        setFilterToDoList(value)
    }

    function removeToDoTask(id: number) {
        const newToDoList = updatedToDoList.filter( t => {
            return t.id !== id
        })
        setUpdatedToDoList(newToDoList)
    }

    let fileredToDoList = updatedToDoList
    if (filterToDoList === 'completed') {
        fileredToDoList = updatedToDoList.filter(t => t.isDone === true)
    }
    if (filterToDoList === 'uncompleted') {
        fileredToDoList = updatedToDoList.filter(t => t.isDone === false)
    }

    return (
    <div className="App">
        <ToDoList defaultToDoList={fileredToDoList} remove={removeToDoTask} />
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <FilterButtons FilterButtons={changeFilter}/>
    </div>
  );
}

export default App;
