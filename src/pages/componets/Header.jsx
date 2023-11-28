import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <StHeader>
        <p>Header</p>
        <p>Todo List</p>
    </StHeader>
  )
}
const StHeader = styled.div`
    background-color: red;
    display: flex;
    justify-content: space-between ;
    align-items: center;
    height: 30px;
`