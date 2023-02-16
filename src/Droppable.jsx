// import React from 'react';
// import { useDroppable } from '@dnd-kit/core';

// export function Droppable(props) {
//     const { isOver, setNodeRef } = useDroppable({
//         id: 'droppable',
//     });
//     const style = {
//         color: isOver ? 'blue' : undefined,
//     };


//     return (
//         <div ref={setNodeRef} style={style}>
//             {props.children}
//         </div>
//     );
// }

// import React from 'react';
// import { useDroppable } from '@dnd-kit/core';

// export function Droppable(props) {
//     // console.log(props.id);
//     const { isOver, setNodeRef } = useDroppable({
//         id: props.id,
//     });
//     const style = {
//         color: isOver ? 'green' : undefined,
//     };


//     return (
//         <div ref={setNodeRef} style={style}>
//             {props.children}
//         </div>
//     );
// }

import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Droppable(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });

    const style = {
        color: isOver ? "red" : undefined,
    };

    return (
        <div className="todoList" ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}

export default Droppable;
