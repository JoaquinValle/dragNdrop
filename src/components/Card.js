import React from 'react'

const Card = (props) => {

    const dragStart = (event) => {
        const target = event.target
        event.dataTransfer.setData("id", target.id)

        // setTimeout(() => {
        //     target.style.display = "none"
        // }, 0 )
    }

    const dragOver = (event) => {
        event.stopPropagation()
    }

    return (
        <div 
            className={props.className}
            id={props.id} 
            draggable={props.draggable}
            onDragStart={dragStart} 
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Card
