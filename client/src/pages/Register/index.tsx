import { useState } from "react"
import { Body, Container } from "./styles"
import { FcApproval } from "react-icons/fc"
import { AiFillCloseCircle } from "react-icons/ai"

interface UserProfile {
  name: string,
  email: string,
  photo: string
}

export const Register = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const userProfile : UserProfile = JSON.parse(urlParams.get('userProfile')!)
  const [userToSave, setUserToSave] = useState<UserProfile>(userProfile)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserToSave({
      ...userToSave,
      name: event.target.value
    })
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await fetch('http://localhost:3001/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userToSave)
    })
  }

  return (
    <Body>
      <h1>Register</h1>
      <Container>
        <img src={userProfile.photo} />
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">First name</label>
          <input type="text" name="name" id="name" value={userToSave.name} onChange={handleNameChange}/>
          <label htmlFor="email">Your email <span>you can't modify</span></label>
          <input type="text" disabled placeholder="Email" value={userProfile.email}/>
          <div className="div-button">
            <button type="button"><AiFillCloseCircle size={48} color={"red"} /></button>
            <button type="submit"><FcApproval size={48}/></button>
          </div>
        </form>
      </Container>
    </Body>
  )
}