import styled from "styled-components"
import { colors } from "../../styles/colors.ts"

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${colors.purple[300]};

  h1 {
    font-size: 4rem;
    color: ${colors.gray[200]};
    font-family: 'Rampart One', cursive;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 82%;
  width: 100vw;
`