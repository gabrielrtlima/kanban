import { FcFullTrash, FcPlus} from 'react-icons/fc'
import { styled } from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'
import ReactModal from 'react-modal'
import { CreateTask } from '../CreateTask'

const ManageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

const Modal = styled(ReactModal)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.15);
  width: 100vw;
  height: 100vh;

`

export const Manage = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }



  return (
    <>
      <ManageContainer>
        <a onClick={openModal}><FcPlus size={64} /></a>
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
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          overlayClassName={"overlay"}
        >
          <CreateTask />
        </Modal>
    </>
  )
}