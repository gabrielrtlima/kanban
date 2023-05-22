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
          <TaskHr />
          <TaskFooter>
          <TaskAutor>
            {props.task.user && (
              props.task.user.map((user: any) => (
                <img src={user.photo} title={user.email}/>
            )))}
           </TaskAutor>
           <TaskData>{formattedDate(props.task.data)}</TaskData>
          </TaskFooter>
        </TaskContainer>
      )}
    </Draggable>
  )
}


 const formattedDate = (date: String) => {
  const formatted = date.substring(0, 10)
  return formatted
}