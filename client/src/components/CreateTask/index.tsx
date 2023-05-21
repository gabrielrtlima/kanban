import { FcApproval } from "react-icons/fc"
import { AiFillCloseCircle } from "react-icons/ai"
import { CreateContainer, CreateForm } from "./styles"

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