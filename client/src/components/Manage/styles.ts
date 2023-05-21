import ReactModal from 'react-modal'
import styled from 'styled-components'

export const ManageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

export const Modal = styled(ReactModal)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.15);
  width: 100vw;
  height: 100vh;

`
