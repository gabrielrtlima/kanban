import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: 100vh;
  background-color: ${colors.gray[300]};
  gap: 50px;

  img {
    width: 400px;
    height: 400px;
    transition: 0.6s;

    &:hover {
      transition: 0.6s;
      transform: scale(1.05);
    }
  }
`

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 48px;
    font-family: 'Montserrat', sans-serif;    
    color: ${colors.gray[800]};
  }
`

export const Container = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.gray[200]};
  width: 300px;
  height: 200px;
  padding: 8px;


`

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  
  h1 {
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin-bottom: 12px;
  }
`

export const ContainerFooter = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    border-radius: 999px;
    width: 20px;
    height: 20px;
  }
`

export const ContainerHr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray[300]};
`
export const GmailLogin = styled.div`
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 80%;
  padding: 6px;
  background-color: ${colors.gray[50]};
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    transition: 0.6s;
    transform: scale(1.05);
  }
`