import { Draggable } from "react-beautiful-dnd"
import { TaskContainer, TaskDescription, TaskFooter, TaskAutor, TaskData, TaskHr } from "./styles"

export const Task = (props: any) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided: any) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {props.task.content}
          {props.task.description && (
            <>
              <TaskHr />
              <TaskDescription>{props.task.description}</TaskDescription>
            </>
          )}
          <TaskFooter>
           {props.task.user && (
            props.task.user.map((user: String) => (
              <TaskAutor>{user}</TaskAutor>
           )))}
           <TaskData>{props.task.data}</TaskData>
          </TaskFooter>
        </TaskContainer>
      )}
    </Draggable>
  )
}