import { styled } from "styled-components"
import { colors } from "../../styles/colors"

export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: transparent;
  align-items: center;

  h1 {
    padding: 5px;
    font-size: 32px;
    color: ${colors.gray[900]};
    text-align: center;
    font-weight: 600;
  }
`

export const CreateForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 60%;
  background-color: ${colors.gray[50]};
  border: 1px solid ${colors.green[50]};
  border-radius: 5px;
  padding: 20px;
  gap: 1rem;
  overflow-y: auto;

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
    min-height: 10%;
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

`

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

`

export const EmailForm = styled.div`
  display: flex;
  width: fit-content;
  gap: 5px;
  font-family: 'Roboto';
  text-transform: capitalize;
`

export const EmailInput = styled.div`
  display: flex;
  justify-content: flex-start !important;
  align-items: self-start;
  background-color: ${colors.gray[500]};
  border-radius: 999px;
  padding: 1px;
  font-size: 12px;
  font-weight: 400;

  img {
    width: 30px;
    height: 30px;
    border-radius: 999px;
  }

  button {
    background-color: transparent;
    padding: 0 3px 0 0;
  }
`

