import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  margin: 5px;
`

function Menu({ items, onClick, disabled }) {
  return (
    <div>
      {items.map((item) => (
        <StyledButton key={item} onClick={() => onClick(item)} disabled={disabled}>
          {item}
        </StyledButton>
      ))}
    </div>
  )
}

export default Menu
