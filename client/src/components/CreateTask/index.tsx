import { FcApproval } from "react-icons/fc"
import { AiFillCloseCircle } from "react-icons/ai"
import { CreateContainer, CreateForm, EmailForm, EmailInput, ButtonDiv } from "./styles"
import { useState } from "react"

export const CreateTask = (props: any) => {
  const userEmail = localStorage.getItem('email')
  const userToken = localStorage.getItem('token')
  const [inputEmail, setInputEmail] = useState({value: '', emails: [userEmail] as string[], photos: [] as string[]})
  const [task, setTask] = useState<any>({
    content: "",
    description: "",
    status: 0,
    users: inputEmail.emails
  })
  const [buttonActive, setButtonActive] = useState(false)

  const submitTask = async () => {
    console.log(JSON.stringify(task))
    await fetch(`${import.meta.env.VITE_API_URL}/task`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${userToken}`
      },
      body: JSON.stringify(task)
    })
    window.location.href = "/kanban"
  }

  const handleUsersEmails = (e: any) => {
    setInputEmail({
      ...inputEmail,
      value: e.target.value
    })
  }

  const handleKeyDown= async (e: any) => {
    if(['Enter', 'Tab', ',', ' '].includes(e.key)) {
      e.preventDefault()

      var email = inputEmail.value.trim()

      if(email) {

        await fetch(`${import.meta.env.VITE_API_URL}/user?email=${email}`, {
          method: 'GET',
          headers: {
            'Authorization': `${userToken}`
          }
        })
        .then(res => res.json())
        .then(data => {
          setInputEmail({
            value: '',
            photos: [...inputEmail.photos, data.result.photo],
            emails: [...inputEmail.emails, data.result.email]
          })})
          setTask({
            ...task,
            users: [...task.users, email]
          })
      }
    }
  }

  const handleDelete = (email: string, photo: string) => {
    setInputEmail({
      ...inputEmail,
      emails: inputEmail.emails.filter(e => e !== email),
      photos: inputEmail.photos.filter(p => p !== photo)
    })
  }

  const handleTask = (e: any, key: string) => {
    setTask({
      ...task,
      [key]: e.target.value
    })
  }

  return (
    <CreateContainer>
      <CreateForm>
        <h1>Create Task</h1>
        <label htmlFor="content">Title</label>
        <input type="text" name="content" id="content" onChange={(e) => handleTask(e, "content")}/>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols={30} rows={10} onChange={(e) => handleTask(e, "description")} value={task.description}></textarea>
        <label htmlFor="status">Share task</label>
        <EmailForm onMouseLeave={() => setButtonActive(false)}>
          {inputEmail.photos.map((photo, index) => (
            <EmailInput key={index}>
              <img src={photo} alt="user" 
              onMouseEnter={() => setButtonActive(true)}
              
              
              />
              {buttonActive && (
                <button
                  type="button"
                  onClick={() => handleDelete(inputEmail.emails[index], inputEmail.photos[index])}
                >
                  &times;
                </button>
              )}
            </EmailInput>
          ))}
        </EmailForm>
        <input type="text" 
          onChange={handleUsersEmails} 
          value={inputEmail.value}
          onKeyDown={handleKeyDown}
          placeholder="Type the email of the users and press (enter, tab or space)"
        />

        <select name="status" id="status" onChange={(e) => handleTask(e, "status")} value={task.status}>
          <option disabled selected value={0}>Status</option>
          <option value={1}>To Do</option>
          <option value={2}>Doing</option>
          <option value={3}>Done</option>
        </select>
        <ButtonDiv>
          <button onClick={props.close}><AiFillCloseCircle size={48} color={"red"}/></button>
          <button onClick={submitTask}><FcApproval size={48}/></button>
        </ButtonDiv>
      </CreateForm>
    </CreateContainer>
  )
}