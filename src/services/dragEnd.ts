import { DropResult } from "react-beautiful-dnd";

export const onDragEnd = (result: DropResult, state: any) => {
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

    return newState
  }

  if (destination.droppableId !== source.droppableId) {
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

    return newState
  }
}