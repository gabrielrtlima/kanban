import { Droppable } from "react-beautiful-dnd"
import { Task } from "../Task"
import { styled } from "styled-components"
import { colors } from "../../colors"

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray[200]};
  margin: 0.5rem;
  border-radius: 0.25rem 0.25rem 0 0;
  gap: 0.25rem;
  width: 20rem;
  min-height: 20rem;
  height: fit-content;
  max-height: 85%;
`

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  padding: 0.5rem;
`

const CardContainer = styled.div`
  background-color: ${colors.gray[200]};
  border-radius: 0.25rem;
  width: 100%;
  min-height: 10rem;
  overflow-y: auto;
`

const ColumnTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${colors.gray[700]};
  text-align: center;
  padding: 0.5rem;
  text-transform: uppercase;
`

export const Column = (props: any) => {

  return (
    <ColumnBox>
      <ColumnTitle>{props.column.title}</ColumnTitle>
      <Droppable droppableId={props.column.id}>
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