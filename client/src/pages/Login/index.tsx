import { Body, Container, ContainerFooter, ContainerHeader, ContainerHr, ContainerLogin, GmailLogin } from "./styles"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export const Login = () => {

  const login = async () => {
    window.location.href=`${import.meta.env.VITE_API_URL}/auth/google`
  }

  return (
    <Body>
      <ContainerHeader>
        <h1>KANBAN</h1>
        <img src="https://i.imgur.com/eCIRNpw.png" alt="login" />
      </ContainerHeader>
      <Container>
        <ContainerLogin>
          <h1>Welcome 😅</h1>
          <GmailLogin onClick={login}>
            <p>Click here to login with </p>
            <FcGoogle size={42}/>
          </GmailLogin>
        </ContainerLogin>
        <ContainerHr />
        <ContainerFooter>
          <a target="_blank" href={"https://grtl.dev/"} title="Blog"><img src="blog.jpg" /></a>
          <a target="_blank" href={"https://linkedin.com/in/gabrielrtl/"} title="LinkedIn"><FaLinkedin /></a>
          <a target="_blank" href={"https://instagram.com/gabrielrtlima"} title="Instagram"><FaInstagram /></a>
          <a target="_blank" href={"https://github.com/gabrielrtlima"} title="Github"><FaGithub /></a>
        </ContainerFooter>
      </Container>
    </Body>
  )  
}