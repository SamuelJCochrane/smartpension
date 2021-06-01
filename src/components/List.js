import React from "react"
import styled from "styled-components"

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
`

const Count = styled.div`
  width: 200px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`

function List({ data }) {
  return (
    <StyledList>
      {Array.from(data)
        .sort(([k1, v1], [k2, v2]) => v2 - v1)
        .map(([key, value]) => (
          <Count key={key}>
            <span>{key}</span>
            <span>{value}</span>
          </Count>
        ))}
    </StyledList>
  )
}

export default List
