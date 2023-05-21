import { styled } from "styled-components"
import { colors } from "../../colors"
import { FcApproval } from "react-icons/fc"
import { AiFillCloseCircle } from "react-icons/ai"

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: transparent;
  align-items: center;

  h1 {
    padding: 5px;
    font-size: 2rem;
    color: ${colors.purple[200]};
    text-align: center;
  }
`

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  background-color: ${colors.gray[50]};
  border: 1px solid ${colors.green[50]};
  border-radius: 5px;
  padding: 20px;
  gap: 1rem;

  label {
    padding: 5px;
    font-size: 22px;
    color: ${colors.gray[700]};
  }

  input {
    padding: 5px;
    font-size: 18px;
    font-family: 'Roboto';
    color: ${colors.gray[800]};
    border: 1px solid ${colors.green[50]};
    border-radius: 0.25rem;
    margin-bottom: 5px;
  }

  textarea {
    padding: 5px;
    font-size: 16px;
    color: ${colors.gray[800]};
    border: 1px solid ${colors.green[50]};
    border-radius: 0.25rem;
    margin-bottom: 5px;
    height: 20%;
    resize: none
  } 

  select {
    padding: 5px;
    font-size: 18px;
    color: ${colors.gray[700]};
    border: 1px solid ${colors.green[50]};
    border-radius: 0.25rem;
    margin-bottom: 5px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export const CreateTask = () => {
  return (
    <CreateContainer>
      <h1>Create Task</h1>
      <CreateForm>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols={30} rows={10}></textarea>
        <select name="status" id="status">
          <option disabled selected>Status</option>
          <option value="To Do">To Do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <div>
          <button><AiFillCloseCircle size={48} color={"red"}/></button>
          <button type="submit"><FcApproval size={48}/></button>
        </div>
      </CreateForm>
    </CreateContainer>
  )
}