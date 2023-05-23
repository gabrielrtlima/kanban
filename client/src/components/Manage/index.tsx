import { FcFullTrash, FcPlus} from 'react-icons/fc'
import { Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'
import { CreateTask } from '../CreateTask'
import { ManageContainer, Modal } from './styles'


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
          <CreateTask close={closeModal}/>
        </Modal>
    </>
  )
}