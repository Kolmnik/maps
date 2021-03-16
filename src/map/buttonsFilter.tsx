import React from 'react';

type FilterButtonsType = {
    FilterButtons: Function
}

export const FilterButtons = (props: FilterButtonsType) => {
    const FilterButtons = props.FilterButtons
    return (
        <div>
            <button onClick={()=>{FilterButtons('all')}}>Все</button>
            <button onClick={()=>{FilterButtons('completed')}}>Выполнено</button>
            <button onClick={()=>{FilterButtons('uncompleted')}}>Не выполнено</button>
        </div>
    )
}