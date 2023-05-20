import { Draggable } from "react-beautiful-dnd"
import { styled } from "styled-components"
import { colors } from "../../colors"

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.gray[50]};
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  width: 90%;
  min-height: 3rem;
  height: fit-content;
  margin: 0.5rem;
  padding: 5px;
`

const TaskDescription = styled.p`
  font-size: 14px;
  color: ${colors.gray[700]};
  padding: 4px 0 6px 0; 
`

const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const TaskAutor = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: #000;
  background-color: #a0eec7;
  width: fit-content;
  border-radius: 4px;
  padding: 2px;
`

const TaskData = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: #31ec8f;
`

const TaskHr = styled.hr`
  width: 100%;
  border: 0.5px solid #e2e8f0;
  margin: 0;

`

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
           <TaskAutor>{props.task.autor}</TaskAutor>
           <TaskData>{props.task.data}</TaskData>
          </TaskFooter>
        </TaskContainer>
      )}
    </Draggable>
  )
}