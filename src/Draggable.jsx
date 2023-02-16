// import React from 'react';
// import { useDraggable } from '@dnd-kit/core';

// export function Draggable(props) {
//     const { attributes, listeners, setNodeRef, transform } = useDraggable({
//         id: 'draggable',
//     });
//     const style = transform ? {
//         transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//     } : undefined;

//     return (
//         <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
//             {props.children}
//         </button>
//     );
// }

// import React from 'react';
// import { useDraggable } from '@dnd-kit/core';

// export function Draggable(props) {
//     const { attributes, listeners, setNodeRef, transform } = useDraggable({
//         id: props.id,
//     });
// const style = transform ? {
//     transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
// } : undefined;


//     return (
//         <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
//             {props.children}
//         </button>
//     );
// }

import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Draggable(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div
            {...listeners}
            {...attributes}
            ref={setNodeRef}
            style={style}
            className="Draggable"
        >
            {props.children}
        </div>
    );
}

export default Draggable;
