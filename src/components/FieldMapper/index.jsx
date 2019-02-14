import React, { useState } from "react"
import "./FieldMapper.css"
import DropItem from "../drop-item"
import DragItem from "../drag-item"

const todos = {
  1: {
    text: "First",
    state: "todo"
  },
  2: {
    text: "Last Name",
    state: "todo"
  },
  3: {
    text: "SSN",
    state: "todo"
  },
  4: {
    text: "Email",
    state: "todo"
  }
}
function FieldMapper() {
  const [todoValues, setValue] = useState(todos)

  return (
    <div className="box">
      <DropItem
        heading="Fields"
        onDrop={id => {
          const currentTodo = { ...todoValues[id] }
          currentTodo.state = "todo"
          setValue({ ...todoValues, ...{ [id]: currentTodo } })
        }}
      >
        {Object.keys(todoValues)
          .map(key => ({ id: key, ...todoValues[key] }))
          .filter(todo => todo.state === "todo")
          .map(todo => (
            <DragItem id={todo.id} data={todo} key={todo.id} />
          ))}
      </DropItem>

      <DropItem
        heading="Transform"
        onDrop={id => {
          const currentTodo = { ...todoValues[id] }
          currentTodo.state = "wip"
          setValue({ ...todoValues, ...{ [id]: currentTodo } })
        }}
      >
        {Object.keys(todoValues)
          .map(key => ({ id: key, ...todoValues[key] }))
          .filter(todo => todo.state === "wip")
          .map(todo => (
            <DragItem id={todo.id} data={todo} key={todo.id} />
          ))}
      </DropItem>
      <DropItem
        heading="Mapped"
        onDrop={id => {
          const currentTodo = { ...todoValues[id] }
          currentTodo.state = "done"
          setValue({ ...todoValues, ...{ [id]: currentTodo } })
        }}
      >
        {Object.keys(todoValues)
          .map(key => ({ id: key, ...todoValues[key] }))
          .filter(todo => todo.state === "done")
          .map(todo => (
            <DragItem id={todo.id} data={todo} key={todo.id} />
          ))}
      </DropItem>
    </div>
  )
}

export default FieldMapper
