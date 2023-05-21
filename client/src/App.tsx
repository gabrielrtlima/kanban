import { DropResult } from "react-beautiful-dnd"
import { Column } from "./components/Column"
import { initialData } from "./services/initialData"
import { DragDropContext } from "react-beautiful-dnd"
import { useState } from "react"
import styled from "styled-components"
import { colors } from "./colors.ts"
import { Manage } from "./components/Manage/index.tsx"

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${colors.purple[300]};

  h1 {
    font-size: 4rem;
    color: ${colors.gray[200]};
    font-family: 'Rampart One', cursive;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 82%;
  width: 100vw;
`

function App() {
  const [state, setState] = useState(initialData)

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result

    if (!destination) return
  
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return 
  
    if (destination.droppableId === source.droppableId) {
      const column = state.columns[source.droppableId]
      const newTaskIds = Array.from(column.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
  
      const newColumn = {
        ...column,
        taskIds: newTaskIds
      }
  
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        }
      }
  
      setState(newState)

    }
  
    if (destination.droppableId !== source.droppableId && destination.droppableId !== "trash") {
      const startColumn = state.columns[source.droppableId]
      const finishColumn = state.columns[destination.droppableId]
  
      const startTaskIds = Array.from(startColumn.taskIds)
      startTaskIds.splice(source.index, 1)
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds
      }
  
      const finishTaskIds = Array.from(finishColumn.taskIds)
      finishTaskIds.splice(destination.index, 0, draggableId)
      const newFinishColumn = {
        ...finishColumn,
        taskIds: finishTaskIds
      }
  
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStartColumn.id]: newStartColumn,
          [newFinishColumn.id]: newFinishColumn
        }
      }
      setState(newState)
      console.log(result)
      fetch(`http://localhost:3001/api/v1/column/${destination.droppableId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          taskIds: [result.draggableId]
        }),
      })
    }

    if(destination.droppableId === "trash") {
      console.log(result)
      const startColumn = state.columns[source.droppableId]
      const startTaskIds = Array.from(startColumn.taskIds)
      startTaskIds.splice(source.index, 1)
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds
      }
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStartColumn.id]: newStartColumn
        }
      }
      setState(newState)
    }

  }
  
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Body>
          <h1>Kanban!</h1>
          <Container>
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId]
              const tasks = column.taskIds.map((taskId) => state.tasks[taskId])
              
              return <Column key={column.id} column={column} tasks={tasks} />
            })}
          </Container>
          <Manage />
        </Body>
      </DragDropContext>
    </>
  )
}


export default App
