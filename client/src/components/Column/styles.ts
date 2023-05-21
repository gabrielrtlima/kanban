import { styled } from "styled-components"
import { colors } from "../../colors"

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray[200]};
  margin: 0.5rem;
  border-radius: 0.25rem 0.25rem 0 0;
  gap: 0.25rem;
  width: 20rem;
  min-height: 20rem;
  height: fit-content;
  max-height: 85%;
`

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  padding: 0.5rem;
`

export const CardContainer = styled.div`
  background-color: ${colors.gray[200]};
  border-radius: 0.25rem;
  width: 100%;
  min-height: 10rem;
  overflow-y: auto;
`

export const ColumnTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${colors.gray[700]};
  text-align: center;
  padding: 0.5rem;
  text-transform: uppercase;
`