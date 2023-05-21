import { Droppable } from "react-beautiful-dnd"
import { Task } from "../Task"
import { ColumnBox, ColumnTitle, CardBox, CardContainer } from "./styles"


export const Column = (props: any) => {

  return (
    <ColumnBox>
      <ColumnTitle>{props.column.title}</ColumnTitle>
      <Droppable droppableId={props.column.id.toString()}>
        {(provided: any) => (
          <CardBox>
            <CardContainer 
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {props.tasks.map((task: any, index: any) => (
                <Task key={task.id} task={task} index={index}/>
              ))}

              {provided.placeholder}
            </CardContainer>
          </CardBox>
        )}
      </Droppable>          
    </ColumnBox>
  )
}