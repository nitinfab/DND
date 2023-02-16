// import React, { useState } from 'react';
// import { DndContext } from '@dnd-kit/core';
// import './App.css'
// import { Droppable } from './Droppable';
// import { Draggable } from './Draggable';

// function App() {
//   const [isDropped, setIsDropped] = useState(false);
//   const draggableMarkup = (

//     <Draggable >
//       <div className='drag_item'>
//         Drag me
//       </div>
//     </Draggable>
//   );

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       <div className='section'>
//         <div className='draggable'>
//           {!isDropped ? draggableMarkup : null}
//         </div>
//         <div className='draggable'>
//           <Droppable>
//             {isDropped ? draggableMarkup : 'Drop here'}
//           </Droppable>
//         </div>
//       </div>
//     </DndContext>
//   );

//   function handleDragEnd(event) {
//     if (event.over && event.over.id === 'droppable') {
//       setIsDropped(true);
//     }
//   }
// }

// export default App;


// import React, { useState } from 'react';
// import { DndContext } from '@dnd-kit/core';
// import './App.css'
// import { Droppable } from './Droppable';
// import { Draggable } from './Draggable';

// function App() {
//   const containers = ['A', 'B', 'C'];
//   const [parent, setParent] = useState(null);
//   const draggableMarkup = (
//     <Draggable id="draggable">Drag me</Draggable>
//   );

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       <div className='section'>
//         <div className='draggable'>
//           {parent === null ? draggableMarkup : null}
//         </div>

//         {containers.map((id) => (
//           // We updated the Droppable component so it would accept an `id`
//           // prop and pass it to `useDroppable`
//           <div className='draggable'>
//             <Droppable key={id} id={id}>
//               {parent === id ? draggableMarkup : 'Drop here'}
//             </Droppable>
//           </div>
//         ))}

//       </div>
//     </DndContext>
//   );

//   function handleDragEnd(event) {
//     console.log(event);
//     const { over } = event;

//     // If the item is dropped over a container, set it as the parent
//     // otherwise reset the parent to `null`
//     setParent(over ? over.id : null);
//   }
// };

// export default App

// import React, { useState } from "react";
// import "./App.css";
// import { DndContext } from "@dnd-kit/core";
// import Draggable from "./Draggable";
// import Droppable from "./Droppable";

// function App() {
//   const containers = ["React", "Redux", "Typescript"];
//   const [parent, setParent] = useState(null);
//   const skillMap = {
//     React: {
//       text: "React is dope!",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
//     },
//     Redux: {
//       text: "Redux is a state management tool",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
//     },
//     Typescript: {
//       text: "Makes JS Strongly typed!",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
//     }
//   };

//   function handleDragEnd(event) {
//     const { over, active } = event;
//     setParent(over ? active.id : null);
//   }

//   const draggableMarkup = id => (
//     <Draggable id={id}>
//       <div>{id}</div>
//       <img className="app__skillLogo" src={skillMap[id].image} alt="" />
//     </Draggable>
//   );

//   return (
//     <div className="flex h-screen w-full">
//       <DndContext onDragEnd={handleDragEnd}>
//         <div className="flex flex-col w-1/4">
//           {containers.map(id => draggableMarkup(id))}
//         </div>
//         {/* {parent ? (
//           <h3 className="app__skillInstruction">
//             Click a logo to reset or drag another to view more information
//           </h3>
//         ) : null} */}
//         <div className="flex flex-col w-1/3">
//           <Droppable key={"abcdef"} id={"abcdef"}>
//             {parent === null ? (
//               <div className="app__infoBox app__infoBox--inactive">
//                 <h3>Click & Drag a logo here to display more info...</h3>
//               </div>
//             ) : (
//               <div className="app__infoBox">
//                 <img
//                   className="app__skillLogo"
//                   src={skillMap[parent].image}
//                   alt=""
//                 />
//                 <h2>{parent}</h2>
//                 <h5>{skillMap[parent].text}</h5>
//               </div>
//             )}
//           </Droppable>
//         </div>
//       </DndContext>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import "./App.css";
// import { DndContext } from "@dnd-kit/core";
// import { useDroppable } from "@dnd-kit/core";
// import { useDraggable } from "@dnd-kit/core";

// function Draggable(props) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: props.id,
//   });

//   const style = transform ? {
//     transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//   } : undefined;

//   return (
//     <div key={props.id}
//       {...listeners}
//       {...attributes}
//       ref={setNodeRef}
//       style={style}
//       className="Draggable"
//     >
//       {props.children}
//     </div>
//   );
// }

// function Droppable(props) {
//   const { isOver, setNodeRef } = useDroppable({
//     id: props.id,
//   });

//   const style = {
//     color: isOver ? "red" : undefined,
//   };

//   return (
//     <div className="todoList" ref={setNodeRef} style={style}>
//       {props.children}
//     </div>
//   );
// }

// function App() {
//   const containers = ["React", "Redux", "Typescript"];
//   const [parent, setParent] = useState(null);
//   const skillMap = {
//     React: {
//       text: "React is dope!",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"
//     },
//     Redux: {
//       text: "Redux is a state management tool",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
//     },
//     Typescript: {
//       text: "Makes JS Strongly typed!",
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
//     }
//   };

//   function handleDragEnd(event) {
//     const { over, active } = event;
//     setParent(over ? active.id : null);
//   }

//   const draggableMarkup = id => (
//     <Draggable key={id} id={id}>
//       <div>{id}</div>
//       <img className="app__skillLogo" src={skillMap[id].image} alt="" />
//     </Draggable>
//   );

//   return (
//     <div className="flex h-screen w-full">
//       <DndContext onDragEnd={handleDragEnd}>
//         <div className="flex flex-col w-1/4">
//           {containers.map(id => draggableMarkup(id))}
//         </div>
//         {/* {parent ? (
//           <h3 className="app__skillInstruction">
//             Click a logo to reset or drag another to view more information
//           </h3>
//         ) : null} */}
//         <div className="flex flex-col w-1/3">
//           <Droppable key={"abcdef"} id={"abcdef"}>
//             {parent === null ? (
//               <div className="app__infoBox app__infoBox--inactive">
//                 <h3>Click & Drag a logo here to display more info...</h3>
//               </div>
//             ) : (
//               <div className="app__infoBox">
//                 <img
//                   className="app__skillLogo"
//                   src={skillMap[parent].image}
//                   alt=""
//                 />
//                 <h2>{parent}</h2>
//                 <h5>{skillMap[parent].text}</h5>
//               </div>
//             )}
//           </Droppable>
//         </div>
//       </DndContext>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { DndContext } from "@dnd-kit/core";
// import { useDroppable } from "@dnd-kit/core";
// import { useDraggable } from "@dnd-kit/core";

// function Draggable(props) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: props.id,
//   });

//   const style = transform ? {
//     transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//   } : undefined;

//   return (
//     <div key={props.id}
//       {...listeners}
//       {...attributes}
//       ref={setNodeRef}
//       style={style}
//       className="Draggable"
//     >
//       {props.children}
//     </div>
//   );
// }

// function Droppable(props) {
//   const { isOver, setNodeRef } = useDroppable({
//     id: props.id,
//   });

//   const style = {
//     color: isOver ? "red" : undefined,
//   };

//   return (
//     <div className="todoList" ref={setNodeRef} style={style}>
//       {props.children}
//     </div>
//   );
// }

// function App() {
//   const [elementTypes, setElementTypes] = useState(["text", "img", "button"]);
//   const [selectedElement, setSelectedElement] = useState(null);

//   function handleDragEnd(event) {
//     const { over, active } = event;
//     setSelectedElement(over ? active.id : null);
//   }

//   const draggableMarkup = id => (
//     <Draggable key={id} id={id}>
//       {id}
//     </Draggable>
//   );

//   return (
//     <div className="flex h-screen w-full">
//       <DndContext onDragEnd={handleDragEnd}>
//         <div className="flex flex-col w-1/4">
//           {elementTypes.map(id => draggableMarkup(id))}
//         </div>
//         <div className="flex flex-col w-1/3">
//           <Droppable key={"abcdef"} id={"abcdef"}>
//             {selectedElement === null ? (
//               <div className="app__infoBox app__infoBox--inactive">
//                 <h3>Click & Drag an element here to display it...</h3>
//               </div>
//             ) : (
//               <div className="app__infoBox">
//                 {selectedElement === "text" && (
//                   <input type="text" placeholder="Write text here..." />
//                 )}
//                 {selectedElement === "img" && (
//                   <input type="file" accept="image/*" />
//                 )}
//                 {selectedElement === "button" && (
//                   <button>Button</button>
//                 )}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       </ DndContext>
//     </div>
//   )
// }

// export default App


import React, { useState, useEffect } from "react";
import "./App.css";
import { DndContext } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div key={props.id}
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

function App() {
  const [elementTypes, setElementTypes] = useState(["text", "img", "button"]);
  const [elements, setElements] = useState([]);

  function handleDragEnd(event) {
    const { active } = event;
    setElements([...elements, active.id]);
  }

  const draggableMarkup = id => (
    <Draggable key={id} id={id}>
      {id}
    </Draggable>
  );

  const elementMarkup = id => {
    switch (id) {
      case 'text':
        return <input type="text" placeholder="Write text here..." />
      case 'img':
        return <input type="file" accept="image/*" />
      case 'button':
        return <button>Button</button>
      default:
        return null
    }
  };

  return (
    <div className="flex h-screen w-full">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col w-1/4">
          {elementTypes.map(id => draggableMarkup(id))}
        </div>
        <div className="flex flex-col w-1/3">
          <Droppable key={"abcdef"} id={"abcdef"}>
            {elements.length === 0 ? (
              <div className="app__infoBox app__infoBox--inactive">
                <h3>Click & Drag an element here to display it...</h3>
              </div>
            ) : (
              <div className="flex flex-wrap">
                {elements.map((id, i) => (
                  <div className="app__infoBox" key={i}>
                    {
                      id === "text" ? (
                        <input type="text" placeholder="Write text here..." />
                      ) : id === "img" ? (
                        <input type="file" accept="image/*" />
                      ) : id === "button" ? (
                        <button>Button</button>
                      ) : null
                    }
                  </div>
                ))}
              </div>
            )}
          </Droppable>
        </div>
      </DndContext>
    </div>
  );
}

export default App;
