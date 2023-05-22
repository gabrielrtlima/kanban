import { colors } from "../../styles/colors"
import { styled } from "styled-components"

export const TaskContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.gray[50]};
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  width: 90%;
  min-height: 3rem;
  height: fit-content;
  margin: 0.5rem;
  padding: 5px;
`

export const TaskDescription = styled.p`
  font-size: 14px;
  color: ${colors.gray[700]};
  padding: 4px 0 6px 0; 
`

export const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const TaskAutor = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${colors.purple[400]};
  background-color: ${colors.gray[300]};
  width: fit-content;
  border-radius: 4px;
  padding: 5px;
  margin-top: 5px;
`

export const TaskData = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${colors.purple[500]};
`

export const TaskHr = styled.hr`
  width: 100%;
  border: 0.5px solid #e2e8f0;
  margin: 0;

`