import { DropResult } from "react-beautiful-dnd"
import { Column } from "../../components/Column/index.tsx"
import { Data, initialData } from "../../services/initialData.ts"
import { DragDropContext } from "react-beautiful-dnd"
import { useEffect, useState } from "react"
import { Manage } from "../../components/Manage/index.tsx"
import { Container, Body } from "./styles"
import { getUser } from "../../services/auth.ts"


function Home() {
  const [state, setState] = useState<Data | null>()

  const urlParams = new URLSearchParams(window.location.search)
  
  const token : string | null = urlParams.get('token')
  
  const [user, setUser] = useState<any>(getUser(token!))
  
  useEffect(() => {
    initialData(user.email, token!)
      .then((data) => {
      setState(data)
    })
  }, [])

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result

    if (!destination) return
  
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return 
  
    if (destination.droppableId === source.droppableId) {
      const column = state!.columns[source.droppableId]
      const newTaskIds = Array.from(column.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
  
      const newColumn  = {
        ...column,
        taskIds: newTaskIds
      }
  
      const newState : Data = {
        ...state!,
        columns: {
          ...state!.columns,
          [newColumn.id]: newColumn
        }
      }
  
      setState(newState)

    }
  
    if (destination.droppableId !== source.droppableId && destination.droppableId !== "trash") {
      const startColumn = state!.columns[source.droppableId]
      const finishColumn = state!.columns[destination.droppableId]
  
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
  
      const newState : Data = {
        ...state!,
        columns: {
          ...state!.columns,
          [newStartColumn.id]: newStartColumn,
          [newFinishColumn.id]: newFinishColumn
        }
      }
      setState(newState)
      fetch(`${import.meta.env.VITE_API_URL}/column/${destination.droppableId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`
        },
        body: JSON.stringify({
          taskIds: [result.draggableId]
        }),
      })
    }

    if(destination.droppableId === "trash") {
      const startColumn = state!.columns[source.droppableId]
      const startTaskIds = Array.from(startColumn.taskIds)
      startTaskIds.splice(source.index, 1)
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds
      }
      const newState : Data = {
        ...state!,
        columns: {
          ...state!.columns,
          [newStartColumn.id]: newStartColumn
        }
      }
      setState(newState)
      //TODO: FAZER A PARTE DE EXCLUIR TASK PARA A API
    }

  }
  
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Body>
          <h1>KANBAN</h1>
          <Container>
            {state && state.columnOrder.map((columnId) => {
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


export default Home
