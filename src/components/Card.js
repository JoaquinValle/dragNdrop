import React from 'react'

const Card = (props, { id, className, draggable }) => {

    const dragStart = (event) => {
        const target = event.target
        event.dataTransfer.setData("cardId", target.id)

        setTimeout(() => {
            target.style.display = "none"
        }, 0 )
    }

    const dragOver = (event) => {
        event.stopPropagation()
    }

    return (
        <div 
            className={className}
            id={id} 
            draggable={draggable}
            onDragStart={dragStart} 
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Card
