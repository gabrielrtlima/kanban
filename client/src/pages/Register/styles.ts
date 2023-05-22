import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.purple[300]};
  gap: 10px;

  h1 {
    color: ${colors.gray[300]};
    font-size: 32px;
    font-weight: 700;
   }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 20vw;
  background-color: ${colors.purple[100]};
  border-radius: 8px 8px 0 0;
  gap: 20px;
  
  img {
    height: 100px;
    width: 100px;
    border-radius: 9999px;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  input {
    border-radius: 8px;
    border: none;
    padding: 5px;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.gray[900]};
    background-color: ${colors.gray[100]};
  }

  label {
    display: flex;
    flex-direction: column;
  }

  span {
    color: ${colors.red[500]};
    font-size: 12px;
  }

  button {
    background-color: transparent;
    border: none;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  .div-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }  
`