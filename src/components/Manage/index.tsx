import { FcFullTrash, FcPlus} from 'react-icons/fc'
import { styled } from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

const ManageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

export const Manage = (props: any) => {
  return (
    <>
      <ManageContainer>
        <a><FcPlus size={64} /></a>
        <div>
          <Droppable droppableId={"trash"}>
            {(provided: any) => (
              <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              >
              </div>
            )}
          </Droppable>
          <FcFullTrash size={64} />
        </div>
      </ManageContainer>
    </>
  )
}